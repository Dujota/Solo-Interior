const contactFields = `
  _id,
  title,
  email,
  phone,
  address,
  excerpt,
  heroImage,
  keywords,
  socialMediaLinks,
  slug
`;

export const indexQuery = `
*[_type == "contact"] [0] {
  ${contactFields}
}`;
