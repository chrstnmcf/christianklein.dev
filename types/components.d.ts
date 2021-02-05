interface PostMetaSlug {
  slug: string;
}
interface PostMeta extends PostMetaSlug {
  date: string;
  image?: string;
  summary: string;
  title: string;
}

type AttributeItems = { [key: string]: boolean };

interface LicenceProps {
  attributes: AttributeItems;
}
