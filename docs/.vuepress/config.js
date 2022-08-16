const { containerPlugin } = require('@vuepress/plugin-container')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  lang: 'en-US',
  title: 'Programming - From Base to Ace',
  description: 'CSharp Programming Course for VIVES University of Applied Sciences (Bachelor Degree)',

  theme: defaultTheme({
    nav: [
    ],
    sidebar: [
      {
        text: 'About this Course',
        link: '/',
      },
      {
        text: 'Introduction to Programming',
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
        children: [
          '/21-object-oriented-thinking/01-abstraction/README.md',
          '/21-object-oriented-thinking/02-all-about-objects/README.md',
        ]
      },
      {
        text: 'Object Oriented Programming',
        children: [
          '/23-defining-custom-classes/README.md',
          '/24-getters-setters-properties/README.md',
          '/25-constructors/README.md',
          '/26-composition/README.md',
          '/27-interfaces/README.md',
          '/28-inheritance/README.md',
          // '/29-abstract-classes/README.md',
        ]
      },
      {
        text: 'Advanced Topics',
        children: [
          '/30-handling-exceptions/README.md',
          // '/31-http-requests/README.md',
          '/34-creating-libraries/README.md',
          '/35-unit-testing/README.md',
        ]
      },
      {
        text: 'WPF',
        children: [
          '/40-introduction-to-wpf/README.md',
        ]
      },
      {
        text: 'Tutorials',
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
      defaultTitle: 'Output',
    }),
  ],
}