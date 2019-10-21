import React from "react"
import Img, { FluidObject, FixedObject } from "gatsby-image"
import styled from "styled-components"
import { FaInstagram } from "react-icons/fa"

const SCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  border-radius: 4px;
  margin: 0 0.5rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`

const CardImage = styled(Img)`
  flex: 1 0 auto;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`

const CardFooter = styled.div`
  display: flex;
  padding: 0.5rem;
  flex: 0 0 auto;
`

const Avatar = styled(Img)`
  border-radius: 50px;
`
const Name = styled.div`
  font-size: 0.9rem;
`
const Account = styled.div`
  font-size: 0.7rem;
`

const CardFooterContent = styled.div`
  padding: 0.25rem 0.75rem;
`

const InstIcon = styled(FaInstagram)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
`

interface Props {
  image: FluidObject
  avatar: FixedObject
  name: string
  account: string
}

const Card: React.FC<Props> = ({ image, avatar, name, account }) => {
  return (
    <SCard>
      <InstIcon size="1.25rem" color="#000" />
      <CardImage fluid={image} />
      <CardFooter>
        <Avatar fixed={avatar} />
        <CardFooterContent>
          <Name>{name}</Name>
          <Account>{`@${account}`}</Account>
        </CardFooterContent>
      </CardFooter>
    </SCard>
  )
}

export default Card
