exports.createPages = ({ actions: { createPage } }) => {
  const projects = require("./src/data/projects.json")
  projects.forEach(project => {
    createPage({
      path: `/projects/${project.id}/`,
      component: require.resolve("./src/templates/project"),
      context: project,
    })
  })
}
