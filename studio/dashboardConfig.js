export default {
  widgets: [
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
                  buildHookId: '5f77119590b28300e2a10227',
                  title: 'Sanity Studio',
                  name: 'nicks-sanity-kitchen-sink-studio',
                  apiId: '73660c30-fb60-47d6-b1e6-c3a8517e1548'
                },
                {
                  buildHookId: '5f7711958bcb6800928b970e',
                  title: 'Blog Website',
                  name: 'nicks-sanity-kitchen-sink',
                  apiId: 'bf865107-4da5-4fe0-828a-03ef8dae7f5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/nicks-sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nicks-sanity-kitchen-sink.netlify.app', category: 'apps'}
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
