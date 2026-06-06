import { slideRoot, base, footer, t, panel, figure, addFigureImage, C } from "./common.mjs";

const fig3 = "/Users/neptune/mtianwang.github.io/outputs/manual-20260603-astro-enrichment/presentations/surface-accretion-summary/assets/fig3.png";

export async function slide05(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "研究结论 I：表面吸积让内盘水汽富集强一个数量级", "Fig. 3"),
    figure(fig3, 68, 152, 690, 438, "Fig. 3  雪线内水汽浓度演化：左为均匀吸积，右为表面吸积"),
    panel(806, 154, 360, 438, C.panel),
    t("对比结果", 840, 194, 160, 32, { size: 24, bold: true, color: C.gold }),
    t("均匀吸积盘", 840, 254, 170, 26, { size: 21, bold: true, color: C.coral }),
    t("脆弱尘埃漂移慢，穿越雪线的冰通量有限；内盘水汽浓度约在 2 Myr 达到 2 wt%。", 840, 288, 284, 78, { size: 19, color: C.ink }),
    t("表面吸积盘", 840, 402, 170, 26, { size: 21, bold: true, color: C.cyan }),
    t("气体被选择性移除，冰尘埃相对保留；雪线内水汽浓度约在 3.5 Myr 达到 15 wt%。", 840, 436, 284, 82, { size: 19, color: C.ink }),
    t("慢漂移从“缺陷”变成了“保留冰库”的条件。", 840, 548, 284, 32, { size: 18, bold: true, color: C.gold }),
    ...footer(5),
  ]));
  addFigureImage(slide, fig3, 68, 152, 690, 438);
  return slide;
}
