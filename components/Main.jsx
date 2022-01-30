
import styled from '@emotion/styled'

const Layout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 56px;
  align-items: center;
  background: #fff;
`


const Main = ({children}) => {
  return (
  <Layout>
    {children}
  </Layout>
  )
}

export default Main