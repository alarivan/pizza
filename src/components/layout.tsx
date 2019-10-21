import React, { ReactNode } from "react"
import styled from "styled-components"
import GlobalStyles from "./styled/global"
import { Normalize } from "styled-normalize"
import Header from "./header"

const SLayout = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <SLayout>
      <Normalize />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </SLayout>
  )
}

export default Layout
