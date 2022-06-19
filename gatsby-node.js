const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `
  )

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const projectTemplate = path.resolve(`src/templates/project.js`)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const path = node.frontmatter.path
    createPage({
      path,
      component: projectTemplate,
      context: {
        pagePath: path,
      },
    })
  })
}

// exports.createPages = ({ actions: { createPage } }) => {
//   const projects = require("./src/data/projects.json")
//   projects.forEach(project => {
//     createPage({
//       path: `/project/${project.id}/`,
//       component: require.resolve("./src/templates/project.js"),
//       context: project,
//     })
//   })
// }
