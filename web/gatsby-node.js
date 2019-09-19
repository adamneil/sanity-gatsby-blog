const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map(edge => edge.node);
}

async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      categories: allSanityCategory {
        edges {
          node {
            id
            title
          }
        }
      }
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const postEdges = (result.data.allSanityPost || {}).edges || [];
  const catList = (result.data || {}).categories ? mapEdgesToNodes(result.data.categories) : [];
  console.log(catList);

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node;
      const dateSegment = format(publishedAt, "YYYY/MM");
      const path = `/blog/${dateSegment}/${slug.current}/`;

      reporter.info(`Creating blog post page: ${path}`);

      createPage({
        path,
        component: require.resolve("./src/templates/blog-post.js"),
        context: { id }
      });
    });

  // catList.forEach(category => {
  //   const cat = category.title.toString();
  //   const { slug = {} } = category.node;
  //   const path = `/${cat}/`;
  //   reporter.info(`Creating blog post page: ${path}`);
  //   createPage({
  //     path,
  //     component: require.resolve("./src/components/blog-post-preview.js"),
  //     context: {
  //       category: category.node.title
  //     }
  //   });
  // });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
};
