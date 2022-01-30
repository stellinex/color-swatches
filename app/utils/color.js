export const getColorValue = (colorObj) => {
  const { type } = colorObj

  switch (type) {
    case 'rgb': {
      return `rgb(${colorObj.red}, ${colorObj.green}, ${colorObj.blue})`
    }
    case 'hsl': {
      return `hsl(${colorObj.hue}, ${colorObj.saturation}%, ${colorObj.lightness}%)`
    }
    default: {
      return new Error('Color type is not supported')
    }
  }
}
