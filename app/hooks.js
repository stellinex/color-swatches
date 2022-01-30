import { useQuery } from 'react-query'

export const useColorSwatches = () => {
  return useQuery(['colors'], () =>
    fetch('http://localhost:3000/api/color-swatches').then((res) => res.json()),
  )
}
