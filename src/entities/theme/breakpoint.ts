// ❗ Values should be same as in `@/styles/_variables`

export enum Breakpoint {
  '2xs' = 360,
  'xs' = 640,
  'sm' = 768,
  'md' = 1024,
  'lg' = 1200,
  'xl' = 1440,
  '2xl' = 1920,
}

export const breakpoints = Object.keys(Breakpoint)
  .filter(key => isNaN(Number(key)))
  .reduce((acc, mq) => {
    acc.numericMapping[mq] = Breakpoint[mq as keyof typeof Breakpoint]
    acc.stringMapping[mq] = `${acc.numericMapping[mq]}px`
    return acc
  }, {
    numericMapping: {} as Record<string, number>,
    stringMapping: {} as Record<string, string>,
  })
