import { slideRoot, base, footer, t, panel, figure, addFigureImage, C } from "./common.mjs";

const fig4 = "/Users/neptune/mtianwang.github.io/outputs/manual-20260603-astro-enrichment/presentations/surface-accretion-summary/assets/fig4.png";

export async function slide06(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "研究结论 II：富集程度随剩余气体质量下降而升高", "Fig. 4"),
    panel(72, 156, 386, 438, C.panel),
    t("核心趋势", 106, 194, 150, 32, { size: 24, bold: true, color: C.gold }),
    t("在脆弱尘埃模型中，均匀吸积盘的水汽富集很快进入数倍平台；表面吸积盘则随着盘气体质量下降持续增强，直到冰尘埃被耗尽。", 106, 252, 302, 120, { size: 22, color: C.ink }),
    t("Mg ↓  →  Zgas ↑", 106, 416, 302, 44, { size: 34, bold: true, color: C.cyan, align: "center" }),
    t("若行星最终质量与剩余可吸积气体量相关，这一关系可转化为 Mp ↓ → Zatm ↑。", 106, 490, 302, 70, { size: 20, color: C.ink }),
    figure(fig4, 508, 152, 664, 438, "Fig. 4  内盘 H2O 富集因子与剩余盘气体质量的关系"),
    ...footer(6),
  ]));
  addFigureImage(slide, fig4, 508, 152, 664, 438);
  return slide;
}
