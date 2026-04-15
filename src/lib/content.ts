export interface PostMeta {
  title: string;
  description: string;
  slug: string;
  variant: "post" | "slides";
  date?: string;
  image?: string;
}
