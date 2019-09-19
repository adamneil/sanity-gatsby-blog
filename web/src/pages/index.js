import React, { useState } from "react";
import { graphql } from "gatsby";
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
  filterByCategory
} from "../lib/helpers";
// import BlogPostPreviewList from '../components/blog-post-preview-list'
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import BlogPostPreviewGrid from "../components/blog-post-preview-grid";
import "../pages/material-kit.css";

// filter: { categories: { elemMatch: { title: { eq: catTitle } } } }
export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    categories: allSanityCategory {
      nodes {
        title
      }
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          categories {
            title
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const [activeIndex, setActiveIndex] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  console.log(categoryFilter);
  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {/* <ul
          className="nav nav-pills nav-pill-primary"
          style={{ justifyContent: "center" }}
          role="tablist"
        >
          {data.categories.nodes.map((category, index) => {
            return (
              <li className="nav-item" key={index}>
                <a
                  className={`${index == activeIndex ? "nav-link active" : "nav-link"}`}
                  onClick={e => {
                    setActiveIndex(index);
                    setCategoryFilter(category.title);
                  }}
                  role="tablist"
                  aria-expanded="false"
                >
                  {category.title}
                  {console.log(category.title)}
                </a>
              </li>
            );
          })}
        </ul> */}

        {postNodes && (
          <BlogPostPreviewGrid
            title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
