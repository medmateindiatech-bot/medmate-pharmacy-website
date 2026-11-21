import QRCode from "qrcode";

/** QR code as an inline SVG string, rendered at build time (no JavaScript sent to the browser). */
export function qrSvg(text: string) {
  return QRCode.toString(text, {
    type: "svg",
    margin: 0,
    errorCorrectionLevel: "M",
    color: { dark: "#01291C", light: "#FFFFFF" },
  });
}
