export const is = {
  number: /^-?\d+(\.\d+)?$/,
  percentage: /^-?\d+(\.\d+)?%$/,
  color:
    /^(#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})|\b(?:rgb|hsl|hwb|lch|oklch|oklab)\(\s*[\d.]+(?:%?)\s+[\d.]+(?:%?)\s+[\d.]+(?:%?)(?:\s*[,/]\s*[\d.]+(?:%?))?\s*\)|\b\d+(?:\.\d+)?(?:%?)\s+\d+(?:\.\d+)?(?:%?)\s+\d+(?:\.\d+)?(?:%?))$/,
  length: /^-?\d+(\.\d+)?(px|em|rem|vw|vh|vmin|vmax|%)$/,
  fraction: /^-?\d+(\.\d+)?fr$/,
  time: /^-?\d+(\.\d+)?(ms|s)$/,
  angle: /^-?\d+(\.\d+)?(deg|rad|grad|turn)$/,
  resolution: /^-?\d+(\.\d+)?(dpi|dpcm|dppx|x)$/
}