import React from "react"
import styled, { css } from "styled-components"
import { Container } from "../styled/common"
import PizzaCat from "../../images/banner/pizzacat.jpg"
import PizzaGuy from "../../images/banner/pizzaguy.jpg"

const SBanner = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const SMessage = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / span 1;
  width: 120%;
`

const backgroundImageStyles = css`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const SPizzaGuy = styled.div`
  ${backgroundImageStyles}
  grid-column: 5 / span 4;
  grid-row: 1 / span 4;
  background-image: url(${PizzaGuy});
  height: 108%;
`
const SPizzaCat = styled.div`
  ${backgroundImageStyles}
  grid-column: 1 / span 5;
  grid-row: 3 / span 3;
  background-image: url(${PizzaCat});
  height: 99%;
  margin-top: 1%;
`

interface Props {}

const Banner: React.FC<Props> = () => {
  return (
    <Container>
      <SBanner>
        <SMessage>
          <h2 style={{ marginTop: "0" }}>
            Pizza made just for you.
            <br />
            By the slice.
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Because you deserve more then pizza made for no one in particular
          </p>
        </SMessage>
        <SPizzaCat />
        <SPizzaGuy />
      </SBanner>
    </Container>
  )
}

export default Banner
