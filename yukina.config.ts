import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "2111实验室",
  subTitle: "2111实验室介绍网站",
  brandTitle: "2111",
  description: "Demo Site",
  site: "https://web.team2111.asia",
  locale: "zh-CN",

  navigators: [
    { nameKey: I18nKeys.nav_bar_home, href: "/" },
    { nameKey: I18nKeys.nav_bar_archive, href: "/archive" },
    { nameKey: I18nKeys.nav_bar_about, href: "/about" },
    { nameKey: I18nKeys.nav_bar_github, href: "https://github.com/team2111/" },
  ],

  username: "2111实验室",
  sign: "人工智能培养基地",
  avatarUrl: "/assets/images/avatar.png",
  socialLinks: [
    { icon: "line-md:github-loop", link: "https://github.com/team2111/" },
    { icon: "mingcute:bilibili-line", link: "https://www.bilibili.com" },
    { icon: "mingcute:netease-music-line", link: "https://music.163.com/#/user/home?id=125291648" },
  ],

  maxSidebarCategoryChip: 6,
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  // ✅ 顶部 Banner：支持多个视频 + 图片混排
  banners: [
    {
      kind: "video",
      src: "/assets/videos/test2.mp4",
      // webm: "/assets/videos/hero_a.webm",
      // poster: "/assets/images/hero_a_poster.jpg",
      autoplay: true, loop: true, muted: true, playsinline: true,
    },
    {
      kind: "video",
      src: "/assets/videos/test.mp4",
      // poster: "/assets/images/hero_b_poster.jpg",
      autoplay: true, loop: true, muted: true, playsinline: true,
    },
    // "/assets/images/banner1.webp",
    // "/assets/images/banner2.webp",
  ],

  // ✅ 文章默认封面池：放多张“文字封面”或普通图片
  // 例如几张预制的文字海报图：/assets/images/covers/text_*.webp
  defaultPostCovers: [
    "/assets/images/covers/test.webp",
    "/assets/images/covers/test2.webp",
    "/assets/images/covers/preview.gif",
  ],

  slugMode: "HASH",
  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  bannerStyle: "LOOP",
};

export default YukinaConfig;
