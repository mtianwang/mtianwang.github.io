import { layers, text, shape } from "@oai/artifact-tool";

export const W = 1280;
export const H = 720;

export const C = {
  bg: "#07111f",
  bg2: "#0b1726",
  ink: "#eef6ff",
  muted: "#9fb4c8",
  dim: "#6e8398",
  line: "#254057",
  cyan: "#3dd6d0",
  gold: "#f4c95d",
  coral: "#f27f6b",
  blue: "#68a5ff",
  green: "#8bd17c",
  panel: "#0f2133",
  panel2: "#13283e",
  white: "#ffffff",
};

const font = "Arial";

export function base(slide, title, kicker = "") {
  const parts = [
    shape({ position: { left: 0, top: 0 }, width: W, height: H, fill: C.bg }),
    shape({ position: { left: 0, top: 0 }, width: W, height: 720, fill: C.bg2 }),
    shape({ position: { left: 58, top: 48 }, width: 6, height: 54, fill: C.cyan }),
    text(title, {
      position: { left: 82, top: 42 },
      width: 850,
      height: 60,
      style: { typeface: font, fontSize: 32, bold: true, color: C.ink, lineSpacing: 1 },
    }),
    text(kicker, {
      position: { left: 1010, top: 52 },
      width: 210,
      height: 28,
      style: { typeface: font, fontSize: 13, color: C.muted, alignment: "right" },
    }),
    shape({ position: { left: 58, top: 118 }, width: 1164, height: 1.5, fill: C.line }),
  ];
  return parts;
}

export function footer(slideNo) {
  return [
    text("Ikeda, Ohno & Okuzumi | Surface-accretion disk enrichment", {
      position: { left: 58, top: 674 },
      width: 720,
      height: 24,
      style: { typeface: font, fontSize: 12, color: C.dim },
    }),
    text(String(slideNo).padStart(2, "0"), {
      position: { left: 1170, top: 674 },
      width: 52,
      height: 24,
      style: { typeface: font, fontSize: 12, color: C.dim, alignment: "right" },
    }),
  ];
}

export function t(value, left, top, width, height, opts = {}) {
  return text(value, {
    position: { left, top },
    width,
    height,
    style: {
      typeface: font,
      fontSize: opts.size ?? 20,
      bold: opts.bold ?? false,
      color: opts.color ?? C.ink,
      lineSpacing: opts.lineSpacing ?? 1.08,
      alignment: opts.align ?? "left",
    },
  });
}

export function panel(left, top, width, height, fill = C.panel) {
  return shape({ position: { left, top }, width, height, fill, borderRadius: 8 });
}

export function chip(label, left, top, width, color = C.cyan) {
  return layers({ position: { left, top }, width, height: 34 }, [
    shape({ position: { left: 0, top: 0 }, width, height: 34, fill: color, borderRadius: 6 }),
    text(label, {
      position: { left: 12, top: 7 },
      width: width - 24,
      height: 20,
      style: { typeface: font, fontSize: 13, bold: true, color: "#06111d", alignment: "center" },
    }),
  ]);
}

export function bullet(textValue, left, top, width, color = C.cyan) {
  return layers({ position: { left, top }, width, height: 54 }, [
    shape({ position: { left: 0, top: 8 }, width: 9, height: 9, fill: color, borderRadius: 5 }),
    t(textValue, 24, 0, width - 24, 54, { size: 20, color: C.ink }),
  ]);
}

export function figure(path, left, top, width, height, caption) {
  return layers({ position: { left, top }, width, height: height + 36 }, [
    shape({ position: { left: 0, top: 0 }, width, height, fill: "#ffffff", borderRadius: 8 }),
    text(caption, {
      position: { left: 8, top: height + 10 },
      width: width - 16,
      height: 24,
      style: { typeface: font, fontSize: 12, color: C.muted, alignment: "center" },
    }),
  ]);
}

export function addFigureImage(slide, path, left, top, width, height) {
  slide.images.add({
    path,
    position: { left: left + 10, top: top + 10, width: width - 20, height: height - 20 },
    fit: "contain",
    alt: "paper figure",
  });
}

export function slideRoot(children) {
  return layers({ position: { left: 0, top: 0 }, width: W, height: H }, children);
}
