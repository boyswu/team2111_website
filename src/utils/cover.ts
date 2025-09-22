import { GetIndexFromSlugID } from "./hash";
import YukinaConfig from "../../yukina.config";

/**
 * 当文章 front-matter 未提供 bannerImage 时，从以下候选中稳定选一张：
 * 1) YukinaConfig.defaultPostCovers（优先，支持“文字封面池”）
 * 2) YukinaConfig.banners 中的图片项 或 视频项的 poster
 * 若都没有，兜底返回一张默认图（可用你的任意一张封面）。
 */

export function GetCoverURLForUnspecifiedEntry(id: string): string {
  const pool = (YukinaConfig as any).defaultPostCovers as string[] | undefined;

  if (pool && pool.length > 0) {
    // ✅ id 为空时固定取第 0 个，避免“总是最后一个”
    const idx = (id && id.trim())
      ? GetIndexFromSlugID(id, pool.length)
      : 0;
    return pool[idx];
  }

  // 2) 退而求其次：从 banners 提取可用的封面（图片 / 视频poster）
  const candidates: string[] = (YukinaConfig.banners as any[])
    .map((item) => {
      if (typeof item === "string") return item; // 纯图片
      if (item && typeof item === "object" && item.kind === "video") {
        return item.poster || ""; // 只有有 poster 才能当封面
      }
      return "";
    })
    .filter(Boolean);

  if (candidates.length > 0) {
    const idx = GetIndexFromSlugID(id || "", candidates.length);
    return candidates[idx];
  }

  // 3) 兜底：请替换成你的项目内保证存在的图片
  return "/assets/images/default_cover.webp";
}
