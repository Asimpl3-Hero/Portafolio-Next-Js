import { withSentryConfig } from "@sentry/nextjs";
import nextConfig from "./next.config";

export default withSentryConfig(nextConfig, {
  // Opciones de configuración de Sentry
  org: "asimpl3-hero",
  project: "portafolio-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
