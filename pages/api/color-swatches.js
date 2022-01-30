export default function getColorSwatches(_, res) {
  const round = Math.round
  const random = Math.random
  const range = 255
  const percent = 100
  const hue = 360

  const genRgbColor = () => {
    let array = []
    while (array.length <= 5) {
      array.push({
        type: 'rgb',
        red: round(random() * range),
        green: round(random() * range),
        blue: round(random() * range),
      })
    }

    return array
  }

  const getHueColor = () => {
    let array = []
    while (array.length <= 5) {
      array.push({
        type: 'hsl',
        hue: `${round(random() * hue)}`,
        saturation: `${round(random() * percent)}`,
        lightness: `${round(random() * percent)}`,
      })
    }

    return array
  }

  const colorArray = [...genRgbColor(), ...getHueColor()].sort(() => Math.random() - 0.5)

  const fiveColors = colorArray.slice(0, 5)

  res.json(fiveColors)
}
