import React from "react"
import styled from "styled-components"

const Name = styled.h1`
  margin-top: 0.5rem;
  font-weight: 700;
`

const Price = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
`

const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1rem;
`

const Submit = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: #ef4b4c;
  transition: background-color 300ms ease;
  padding: 1rem 0.5rem;
  width: 100%;
  margin-bottom: 0.5rem;

  :hover {
    background-color: #ef4b4e;
  }
`

const Text = styled.span`
  font-size: 0.75rem;
`

interface Props {}

const Info: React.FC<Props> = () => {
  return (
    <div>
      <Name>Brooklyn Classic</Name>
      <Price>$99 USD</Price>
      <Description>
        Because you deserve the most sizzling of them all.
        <br /> Nothin' mo' nothin' less.
      </Description>
      <div>Quantity</div>
      <Submit>onwards with my pizza</Submit>
      <Text>30 days money back guarantee</Text>
    </div>
  )
}

export default Info
