const { containerPlugin } = require('@vuepress/plugin-container')
const { defaultTheme } = require('@vuepress/theme-default')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',

  theme: defaultTheme({
    logo: '/images/logo.svg',
    navbar: [
      { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
      { text: 'Report Issue', link: 'https://github.com/BioBoost/course_programming_from_base_to_ace/issues' },
      { text: 'Organization', link: 'https://github.com/vives-introduction-to-programming-2021' }
    ],
    sidebar: [
      {
        text: 'About this Course',
        collapsible: false,
        link: '/about-this-course/README.md',
      },
      {
        text: 'Introduction to Programming',
        collapsible: false,
        children: [
          '/01_introduction_to_computer_programming/README.md',
          '/02_basic_building_blocks/README.md',
          '/03_starting_in_csharp/README.md',
          '/04_storing_data/README.md',
          '/05_processing_data/README.md',
          '/06_getting_user_data/README.md',
          '/07_methods/README.md',
          '/08_making_decisions/README.md',
          '/09_iterating/README.md',
          '/10_strings/README.md',
          '/11_arrays/README.md',
        ]
      },
      {
        text: 'Object Oriented Thinking',
        collapsible: false,
        children: [
          '/21-abstraction/README.md',
          '/22-all-about-objects/README.md',
        ]
      },
      {
        text: 'Object Oriented Programming',
        collapsible: false,
        children: [
          // '/23-creating-and-using-objects/README.md',
          '/24-defining-custom-classes/README.md',
          '/25-getters-setters-properties/README.md',
          '/26-constructors/README.md',
          '/27-composition/README.md',
          '/28-interfaces/README.md',
          '/29-inheritance/README.md',
          // '/30-abstract-classes/README.md',
        ]
      },
      {
        text: 'Advanced Topics',
        collapsible: false,
        children: [
          '/31-handling-exceptions/README.md',
          // '/32-http-requests/README.md',
          '/34-creating-libraries/README.md',
          '/35-unit-testing/README.md',
        ]
      },
      {
        text: 'WPF',
        collapsible: false,
        children: [
          '/40-introduction-to-wpf/README.md',
        ]
      },
      {
        text: 'Tutorials',
        collapsible: false,
        children: [
          '/50-tutorials/terminal-selection-menu/README.md',
        ]
      },
    ],
    sidebarDepth: 1,
    repo: 'BioBoost/course_programming_from_base_to_ace',
    docsDir: 'docs',
    docsBranch: 'master'
  }),
  serviceWorker: true,
  plugins: [
    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}