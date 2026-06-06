import { slideRoot, base, footer, t, panel, bullet, figure, addFigureImage, C } from "./common.mjs";

const fig2 = "/Users/neptune/mtianwang.github.io/outputs/manual-20260603-astro-enrichment/presentations/surface-accretion-summary/assets/fig2.png";

export async function slide04(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "研究方法：比较两种吸积垂直结构", "Fig. 2"),
    figure(fig2, 66, 156, 560, 398, "Fig. 2  均匀吸积与表面吸积下气体和尘埃输运的差异"),
    panel(690, 156, 480, 398, C.panel),
    t("一维气体-尘埃-H2O 演化模型", 724, 190, 370, 34, { size: 24, bold: true, color: C.gold }),
    bullet("同时演化气体、尘埃和 H2O 表面密度。", 724, 252, 370, C.gold),
    bullet("包含径向输运、湍流扩散、尘埃碰撞生长/破碎，以及水冰升华/凝结。", 724, 318, 370, C.cyan),
    bullet("基准脆弱冰尘埃：vstick = 0.3 m/s；对照模型使用 1 m/s。", 724, 400, 370, C.blue),
    t("核心差异：表面吸积移除气体，但难以直接带走沉降到中平面的冰尘埃。", 724, 488, 388, 44, { size: 20, bold: true, color: C.ink }),
    ...footer(4),
  ]));
  addFigureImage(slide, fig2, 66, 156, 560, 398);
  return slide;
}
