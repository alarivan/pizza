import React from "react"
import styled from "styled-components"
import { FiShoppingCart } from "react-icons/fi"

const SMenu = styled.div`
  display: flex;
  align-items: center;
`

const Phone = styled.div`
  color: #c0c0c0;
  margin-right: 0.5rem;
`

const Cart = styled.div`
  position: relative;
`

const CartCount = styled.span`
  width: 13px;
  height: 13px;
  line-height: 13px;
  font-size: 8px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  background-color: #ef4b4c;
  position: absolute;
  right: -6px;
  top: -4px;
`

interface Props {}

const SecondaryMenu: React.FC<Props> = () => {
  return (
    <SMenu>
      <Phone>1-800-253-1775</Phone>
      <Cart>
        <FiShoppingCart />
        <CartCount>2</CartCount>
      </Cart>
    </SMenu>
  )
}

export default SecondaryMenu
