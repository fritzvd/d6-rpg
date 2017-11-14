const calculateDice = (dice) => {
  const numDice = Math.floor(dice / 3)
  const pips = dice % 3
  return `${numDice}D${(pips === 0) ? '' : `+${pips}`  }`
}
export default calculateDice