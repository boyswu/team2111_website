import type I18nKeys from "../locales/keys";

export interface BannerVideo {
  kind: "video";
  src: string;
  webm?: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsinline?: boolean;
}

export type BannerItem = string | BannerVideo;

interface Configuration {
  title: string;
  subTitle: string;
  brandTitle: string;

  description: string;
  site: string;

  locale: "en" | "zh-CN";
  navigators: { nameKey: I18nKeys; href: string }[];

  username: string;
  sign: string;
  avatarUrl: string;

  socialLinks: { icon: string; link: string }[];

  maxSidebarCategoryChip: number;
  maxSidebarTagChip: number;
  maxFooterCategoryChip: number;
  maxFooterTagChip: number;

  // ✅ 顶部轮播：图片或视频都可
  banners: BannerItem[];

  // ✅ 文章默认封面池（可以放“文字封面图”或普通图片）
  defaultPostCovers: string[];

  slugMode: "HASH" | "RAW";

  license: {
    name: string;
    url: string;
  };

  bannerStyle: "LOOP";
}

export type { Configuration };
