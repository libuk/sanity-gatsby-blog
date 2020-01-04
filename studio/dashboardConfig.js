export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e0ff1238f258007decb13f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mk4apxg3',
                  apiId: 'b2a9f76b-d255-4f1f-94c5-4af41e5549ba'
                },
                {
                  buildHookId: '5e0ff1232f01284c42b0e95e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2idcv6yd',
                  apiId: '4fd966a1-e2a6-42d7-8987-b37e4c836203'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/libuk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2idcv6yd.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
