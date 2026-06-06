import { slideRoot, base, footer, t, panel, chip, C } from "./common.mjs";

export async function slide01(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "表面吸积盘中的重元素富集", "论文速览"),
    t("一种解释气态系外行星质量-金属丰度反相关的新盘演化图像", 82, 152, 920, 96, { size: 34, bold: true, color: C.ink, lineSpacing: 1.0 }),
    t("核心命题", 82, 296, 160, 34, { size: 18, bold: true, color: C.cyan }),
    t("当磁盘风主要从盘表面移除气体，而脆弱冰尘埃沉降在中平面并缓慢漂移时，雪线外的冰/气比会升高；这些冰尘埃穿越雪线升华后，可以显著富集内盘水汽与重元素。", 82, 336, 720, 110, { size: 25, color: C.ink, lineSpacing: 1.15 }),
    panel(844, 176, 318, 310, C.panel),
    chip("机制关键词", 894, 218, 218, C.gold),
    t("MHD 风驱动表面吸积", 890, 282, 230, 28, { size: 20, bold: true }),
    t("脆弱冰尘埃慢漂移", 890, 330, 230, 28, { size: 20, bold: true }),
    t("水雪线内 H2O 水汽增强", 890, 378, 250, 28, { size: 20, bold: true }),
    t("低质量巨行星更高金属丰度", 890, 426, 260, 28, { size: 20, bold: true }),
    ...footer(1),
  ]));
  return slide;
}
