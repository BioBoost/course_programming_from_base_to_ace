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
      { text: 'Organization', link: 'https://github.com/vives-intro-to-programming-2022-2023' }
    ],
    sidebar: [
      {
        text: 'About this Course',
        link: '/about-this-course/README.md',
      },
      {
        text: 'Introduction to Programming',
        children: [
          '/01-introduction-to-computer-programming/README.md',
          '/02-basic-building-blocks/README.md',
          '/03-starting-in-csharp/README.md',
          '/04-storing-data/README.md',
          '/05-processing-data/README.md',
          '/06-getting-user-data/README.md',
          '/07-methods/README.md',
          '/08-making-decisions/README.md',
          '/09-loops/README.md',
          '/10-strings/README.md',
          '/11-arrays/README.md',
        ]
      },
      {
        text: 'Object Oriented Thinking',
        children: [
          '/21-abstraction/README.md',
          '/22-all-about-objects/README.md',
        ]
      },
      {
        text: 'Object Oriented Programming',
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
        children: [
          '/41-handling-exceptions/README.md',
          '/42-creating-libraries/README.md',
          '/43-unit-testing/README.md',
          // '/44-http-requests/README.md',
        ]
      },
      {
        text: 'WPF',
        children: [
          '/50-introduction-to-wpf/README.md',
        ]
      },
      {
        text: 'Tutorials',
        children: [
          '/60-tutorials/terminal-selection-menu/README.md',
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