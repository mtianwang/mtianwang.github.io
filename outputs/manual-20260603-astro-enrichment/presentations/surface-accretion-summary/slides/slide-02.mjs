import { slideRoot, base, footer, t, panel, bullet, figure, addFigureImage, C } from "./common.mjs";

const fig1 = "/Users/neptune/mtianwang.github.io/outputs/manual-20260603-astro-enrichment/presentations/surface-accretion-summary/assets/fig1.png";

export async function slide02(presentation) {
  const slide = presentation.slides.add();
  slide.compose(slideRoot([
    ...base(slide, "科学背景：巨行星大气金属丰度不是恒星值", "Fig. 1"),
    figure(fig1, 64, 154, 572, 406, "Fig. 1  热/暖巨行星大气氧丰度与行星质量的反相关趋势"),
    panel(690, 156, 480, 390, C.panel),
    t("观测事实", 724, 188, 180, 34, { size: 24, bold: true, color: C.gold }),
    bullet("许多气态巨行星大气呈超恒星金属丰度，部分高出宿主恒星一个数量级以上。", 724, 246, 392, C.gold),
    bullet("氧丰度与行星质量呈反相关：低质量热/暖巨行星更容易表现为高金属丰度。", 724, 326, 392, C.cyan),
    bullet("若形成中的巨行星吸积了富水汽内盘气体，其大气会继承这种重元素增强。", 724, 406, 392, C.blue),
    t("问题转向：原行星盘怎样把气体做成“富金属”？", 724, 500, 384, 36, { size: 21, bold: true, color: C.ink }),
    ...footer(2),
  ]));
  addFigureImage(slide, fig1, 64, 154, 572, 406);
  return slide;
}
