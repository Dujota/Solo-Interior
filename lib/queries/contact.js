const contactFields = `
  _id,
  title,
  address,
  excerpt,
  heroImage,
  keywords,
  slug
`;

export const indexQuery = `
*[_type == "contact"] [0] {
  ${contactFields}
}`;
