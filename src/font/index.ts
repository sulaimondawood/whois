import localFont from "next/font/local";

export const euclid = localFont({
  src: [
    {
      path: "../font/Euclid-Circular-A/Euclid-Circular-A-Semibold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../font/Euclid-Circular-A/Euclid-Circular-A-Medium.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../font/Euclid-Circular-A/Euclid-Circular-A-Light.woff2",
      style: "normal",
      weight: "300",
    },
  ],
  display: "swap",
});
