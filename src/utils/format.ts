export const getFormattedNumber = (score: number | null) => {
  return score
    ? parseFloat(score.toFixed(2))
    : 0
}
