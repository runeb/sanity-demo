export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d08d67d5d596845e3631e9d',
                  title: 'Sanity Studio',
                  name: 'sanity-demo-studio',
                  apiId: '7da60f35-5e0b-4c10-927e-cebd2cab78ff'
                },
                {
                  buildHookId: '5d08d67da9b15915b4f2de73',
                  title: 'Portfolio Website',
                  name: 'sanity-demo-web',
                  apiId: '89c6b4c4-de47-4fec-b0ac-0d0e57955cc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sanity-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-demo-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
