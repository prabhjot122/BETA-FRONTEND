import type { Metadata } from "next";
import { commonIcons } from "./seoData";

/**
 * Creates metadata with consistent icons configuration for all pages
 */
export function createMetadataWithIcons(metadata: Metadata): Metadata {
  return {
    ...metadata,
    icons: {
      icon: [
        { url: commonIcons.favicon, sizes: 'any' },
        { url: commonIcons.icon16, sizes: '16x16', type: 'image/png' },
        { url: commonIcons.icon32, sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: commonIcons.appleTouchIcon, sizes: '180x180', type: 'image/png' },
        { url: commonIcons.appleTouchIcon57, sizes: '57x57', type: 'image/png' },
        { url: commonIcons.appleTouchIcon60, sizes: '60x60', type: 'image/png' },
        { url: commonIcons.appleTouchIcon72, sizes: '72x72', type: 'image/png' },
        { url: commonIcons.appleTouchIcon76, sizes: '76x76', type: 'image/png' },
        { url: commonIcons.appleTouchIcon114, sizes: '114x114', type: 'image/png' },
        { url: commonIcons.appleTouchIcon120, sizes: '120x120', type: 'image/png' },
        { url: commonIcons.appleTouchIcon144, sizes: '144x144', type: 'image/png' },
        { url: commonIcons.appleTouchIcon152, sizes: '152x152', type: 'image/png' },
        { url: commonIcons.appleTouchIcon180, sizes: '180x180', type: 'image/png' },
      ],
    },
  };
}
