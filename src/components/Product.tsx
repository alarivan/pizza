import React from "react"
import styled from "styled-components"
import Gallery from "./Product/Gallery"
import Info from "./Product/Info"

const SProduct = styled.div`
  display: flex;
  width: 100%;
`

interface Props {}

const Product: React.FC<Props> = () => {
  return (
    <SProduct>
      <Gallery />
      <Info />
    </SProduct>
  )
}

export default Product
