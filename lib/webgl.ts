export function isWebGLSupported(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!window.WebGLRenderingContext || !gl) return false;
    // In-app browsers (Instagram/TikTok/Meta) can hand back a context that is
    // present but broken — probing precision is what crashes Three.js there.
    const ctx = gl as WebGLRenderingContext;
    return !!ctx.getShaderPrecisionFormat(ctx.VERTEX_SHADER, ctx.HIGH_FLOAT);
  } catch {
    return false;
  }
}
