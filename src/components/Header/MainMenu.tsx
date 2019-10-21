import React from "react"
import styled from "styled-components"
import { IoMdArrowDropdown } from "react-icons/io"

const SMenu = styled.div`
  display: flex;
`

const SMenuItem = styled.div`
  margin: 0 0.5rem;
`

const SButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
`

interface MenuItemProps {
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
  return (
    <SMenuItem>
      <SButton>
        <span>{label}</span>
        <IoMdArrowDropdown color="#bbb" />
      </SButton>
    </SMenuItem>
  )
}

interface Props {}

const MainMenu: React.FC<Props> = () => {
  return (
    <SMenu>
      <MenuItem label="Edibles" />
      <MenuItem label="Merch" />
      <SMenuItem>
        <SButton>Reviews</SButton>
      </SMenuItem>
    </SMenu>
  )
}

export default MainMenu
