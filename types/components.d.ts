interface PostMetaSlug {
  slug: string;
}
interface PostMeta extends PostMetaSlug {
  date: string;
  image?: string;
  imageCredit?: string;
  summary: string;
  title: string;
}
