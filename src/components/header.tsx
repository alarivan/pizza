import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container, Space } from "./styled/common"
import Logo from "./Header/Logo"
import MainMenu from "./Header/MainMenu"
import SecondaryMenu from "./Header/SecondaryMenu"

const SHeader = styled.header`
  background: #fff;
  margin-bottom: 3rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const HeaderContainer = styled(Container)`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 1.5rem;
`

const Header: React.FC = () => (
  <SHeader>
    <HeaderContainer>
      <HeaderLink to="/">
        <Logo />
      </HeaderLink>
      <MainMenu />
      <Space />
      <SecondaryMenu />
    </HeaderContainer>
  </SHeader>
)

export default Header
