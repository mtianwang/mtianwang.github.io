import { slideRoot, base, footer, t, panel, bullet, chip, C } from "./common.mjs";

export async function slide03(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "关键科学问题：慢漂移冰尘埃还能富集内盘吗？", "问题定义"),
    panel(72, 166, 500, 330, C.panel),
    chip("传统图像的张力", 116, 204, 190, C.coral),
    bullet("过去模型依赖冰质卵石高效长大、快速内漂，并在雪线内升华释放 H2O。", 116, 274, 380, C.coral),
    bullet("但近期盘观测和实验指向低温冰尘埃更脆弱，黏结阈值速度低，尺寸小、漂移慢。", 116, 366, 380, C.coral),
    panel(646, 166, 500, 330, C.panel2),
    chip("本文要回答", 690, 204, 170, C.cyan),
    bullet("如果冰尘埃漂移慢，是否仍能让雪线内气体显著富水汽？", 690, 274, 388, C.cyan),
    bullet("这种盘气体富集是否能自然产生类似行星质量-金属丰度反相关的趋势？", 690, 366, 388, C.gold),
    t("关键假设变化：不是让尘埃更快，而是让气体从尘埃上方更快流失。", 164, 558, 940, 48, { size: 28, bold: true, color: C.ink, align: "center" }),
    ...footer(3),
  ]));
  return slide;
}
