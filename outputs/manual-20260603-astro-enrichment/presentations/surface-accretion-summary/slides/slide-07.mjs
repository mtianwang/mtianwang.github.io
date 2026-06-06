import { slideRoot, base, footer, t, panel, bullet, chip, C } from "./common.mjs";

export async function slide07(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "科学意义：把盘吸积结构、尘埃物理和行星大气连接起来", "讨论"),
    panel(70, 166, 342, 376, C.panel),
    chip("新解释路径", 112, 204, 156, C.cyan),
    bullet("不再要求冰质卵石必须快速漂移。", 112, 278, 242, C.cyan),
    bullet("MHD 风驱动表面吸积可自然造成气体与固体分馏。", 112, 354, 242, C.cyan),
    bullet("内盘富水汽气体为巨行星大气高金属丰度提供来源。", 112, 444, 242, C.cyan),
    panel(470, 166, 342, 376, C.panel2),
    chip("观测联系", 512, 204, 156, C.gold),
    bullet("解释低质量气态行星更高氧丰度/金属丰度的定性趋势。", 512, 278, 242, C.gold),
    bullet("JWST 内盘分子谱线观测可检验水汽富集与卵石漂移迹象。", 512, 368, 242, C.gold),
    bullet("盘环隙、尘埃陷阱会改变冰尘埃供应，需要纳入比较。", 512, 458, 242, C.gold),
    panel(870, 166, 342, 376, C.panel),
    chip("理论下一步", 912, 204, 156, C.coral),
    bullet("把该盘化学富集模型接入行星形成与气体吸积计算。", 912, 278, 242, C.coral),
    bullet("处理红外观测主要追踪盘表层、而尘埃富集发生在中平面的差异。", 912, 368, 242, C.coral),
    bullet("定量检验是否能复现实测质量-金属丰度斜率和离散度。", 912, 468, 242, C.coral),
    t("一句话结论：表面吸积让“脆弱慢漂移冰尘埃”成为内盘重元素富集的有效来源。", 118, 596, 1040, 42, { size: 26, bold: true, color: C.ink, align: "center" }),
    ...footer(7),
  ]));
  return slide;
}
