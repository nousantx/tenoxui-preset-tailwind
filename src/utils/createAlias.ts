export const generateAliases = (properties: string[]) => {
  const aliases: Record<string, string> = {}

  properties.forEach((prop) => {
    aliases[`${prop}-auto`] = `${prop}-[auto]`
    aliases[`${prop}-full`] = `${prop}-[{full}]`
    aliases[`${prop}-1px`] = `${prop}-[1px]`
    aliases[`-${prop}-full`] = `-${prop}-[-{full}]`
    aliases[`-${prop}-1px`] = `-${prop}-[-1px]`
  })

  return aliases
}
