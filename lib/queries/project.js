const projectFields = `
  _id,
  name,
  title,
  excerpt,
  body,
  heroImage,
  images,
  keywords,
  publishedAt,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "project"] | order(order asc) {
  ${projectFields}
}`;

/**
 *
 * 2 queries in one call, get the single project and
 * all the rest in list
 * */

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $slug] | order(order asc) [0] {
    content,
    ${projectFields}
  },
  "moreProjects": *[_type == "project" && slug.current != $slug] | order(order asc) [0...2] {
    content,
    ${projectFields}
  }
}`;

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`;

export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`;
