module.exports = {
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',
  themeConfig: {
    nav: [
    ],
    sidebar: [
      {
        title: 'About this Course',   // required
        // path: '/foo/',      // optional, which should be a absolute path.
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ''
        ]
      },
      {
        title: 'Introduction to Programming',   // required
        // path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
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
        ]
      },
      {
        title: 'Object Oriented Thinking',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          ['/21-object-oriented-thinking/01-abstraction/', '20 - Abstraction'],
          ['/21-object-oriented-thinking/02-all-about-objects/', '21 - All About Objects'],
        ]
      },
      {
        title: 'Object Oriented Programming',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '23-defining-custom-classes/',
          '24-constructors/',
          '25-composition/',
          '26-inheritance/',
        ]
      },
      {
        title: 'Advanced Topics',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '30-handling-exceptions/',
        ]
      },
      {
        title: 'WPF',
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '40-introduction-to-wpf/',
        ]
      }
    ],
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