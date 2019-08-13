module.exports = {
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',
  themeConfig: {
    nav: [
      {text: 'Introduction to Programming', link: '/introduction/'},
      {text: 'Object Oriented Programming', link: '/oop/'}
    ],
    sidebar: {
      '/introduction/': [
        '',
      ],

      '/oop/': [
        '',
      ],

      // fallback
      '/': [
        '',
        '/introduction/',
        '/oop/'
      ]
    },
    sidebarDepth: 2,
    repo: 'BioBoost/course_programming_from_base_to_ace',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
}