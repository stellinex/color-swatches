import styled from '@emotion/styled'
import {css} from '@emotion/react'
import { getColorValue } from '../app/utils/color'

const Container = styled.div`
 border-radius: 12px;
 height: 120px;
 width: 600px;
 display: flex;
 overflow: hidden;
 margin-top: 40px;
 margin-bottom: 60px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

const ColorTile = styled.div`
  width: 20%;
  height: 100%;

  ${props => {
    return props.color && css`background-color: ${props.color};` 
  }}
`


const ColorSwatches = ({ colorObjs }) => {
  return (<Container>
    {colorObjs.map((colorObj, i) => {
      const color = getColorValue(colorObj)
      return <ColorTile key={i} color={color}/>
    })}
  </Container>
  )
  
 
}

export default ColorSwatches
