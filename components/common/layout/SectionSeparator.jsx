export default function SectionSeparator({ top = 24, bottom = 24 }) {
  return <hr className={`border-accent-2 mt-${top} mb-${bottom}`} />;
}
