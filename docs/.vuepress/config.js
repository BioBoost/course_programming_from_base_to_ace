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
        '01_introduction_to_computer_programming/',
        '02_basic_building_blocks/',
        '03_starting_in_csharp/',
        '04_storing_data/',
        '05_processing_data/',
        '06_getting_user_data/',
        '07_methods/',
        '08_making_decisions/',
        '09_iterating/',
        '10_strings/',
        '11_arrays/',
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
    sidebarDepth: 1,
    repo: 'BioBoost/course_programming_from_base_to_ace',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
    ['container', {
      type: 'codeoutput',
      defaultTitle: 'Output',
    }]
  ],
}