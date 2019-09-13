export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7bf9cf8f1b28121761748b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rtbvqus9',
                  apiId: '9c1e9465-0c0e-42c3-8e9f-55b1c0f6f25f'
                },
                {
                  buildHookId: '5d7bf9cf9d3d44fae6453e3e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tksb1cro',
                  apiId: 'ddfabdf0-08d7-485a-ab91-3a3464aa8685'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamneil/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tksb1cro.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
