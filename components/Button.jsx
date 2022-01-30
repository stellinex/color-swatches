
import styled from '@emotion/styled'

const StyledButton = styled.button`
  font-size: 16px;
  padding: 14px;
  background: #000;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`


const Button = ({children, ...rest}) => {
  return (
  <StyledButton {...rest}>
    {children}
  </StyledButton>
  )
}

export default Button