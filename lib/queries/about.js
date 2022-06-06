const aboutFields = `
  _id,
  name,
  header,
  title,
  excerpt,
  body,
  heroImage,
  keywords,
  "slug": slug.current,
`;

export const indexQuery = `
*[_type == "about"] [0] {
  ${aboutFields}
}`;
