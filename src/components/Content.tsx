import React from "react"
import styled, { css } from "styled-components"
import PizzaPattern from "../images/pizza-pattern.png"
import Carousel from "./Content/Carousel"

const SContent = styled.div`
  position: relative;
  padding: 3rem 0;
`

const backgroundStyles = css`
  position: absolute;
  left: 0;
  top: 0;
  clip-path: polygon(0 15%, 0 80%, 195% 80%);
  height: 100%;
  width: 100%;
`

const BackgroundColor = styled.div`
  ${backgroundStyles}
  background-color: #f1d0d0;
  z-index: -2;
`

const BackgroundPattern = styled.div`
  ${backgroundStyles}
  background-image: url(${PizzaPattern});
  background-size: 330px;
  z-index: -1;
  opacity: 0.5;
`

const Title = styled.h2`
  font-size: 2.25rem;
  text-align: center;
  max-width: 500px;
  margin: 2rem auto;
`

interface Props {}

const Content: React.FC<Props> = () => {
  return (
    <SContent>
      <BackgroundColor />
      <BackgroundPattern />
      <Title>
        We completely re-engineered the pizza just for you. So you can eat it
        all day.
      </Title>
      <Carousel />
    </SContent>
  )
}

export default Content
