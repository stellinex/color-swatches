# Color swatch generator

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Color space service

For the color space service, we support RGB and HSL color spaces.

## How to add new color space

- Go to app > utils > color.js > getColorValue
- What function getColorValue does is transform **color object** to **CSS supported syntax**. So you can extend the new one by adding type checking case and the convertor function and then return the string color value.
