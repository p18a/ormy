/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

const EVENT_TYPE = "ContentfulEvent";

const slugify = string => {
    const from = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;";
    const to = "aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------";
    const p = new RegExp(from.split("").join("|"), "g");
    return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, c => to.charAt(from.indexOf(c))) // Replace special characters
        .replace(/&/g, "-ja-") // Replace & with ‘ja’
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
    const now = new Date();

    if (node.internal.type === EVENT_TYPE) {
        const date = new Date(node.date);

        const upcoming = now < date;

        createNodeField({ name: "upcoming", node, value: upcoming });
        createNodeField({
            name: "slug",
            node,
            value: `/events/${slugify(node.title)}-${date.getDate()}-${date.getMonth() +
                1}-${date.getFullYear()}`,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const eventTpl = path.resolve(`src/templates/EventPost.jsx`);

        resolve(
            graphql(`
                query EventPagesQuery {
                    allContentfulEvent {
                        edges {
                            node {
                                id
                                date(formatString: "YYYY-MM-DDTHH:mm:ss")
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors) {
                    reject(result.errors);
                }

                result.data.allContentfulEvent.edges.forEach(edge => {
                    createPage({
                        path: `${edge.node.fields.slug}`,
                        component: eventTpl,
                        context: {
                            id: edge.node.id,
                        },
                    });
                });
            })
        );
    });
};
