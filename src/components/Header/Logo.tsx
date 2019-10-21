import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SLogo = styled.div`
  font-size: 1rem;
`

const Logo: React.FC = props => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "pizza-logo.png" }) {
        childImageSharp {
          fixed(width: 93, height: 10) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <SLogo {...props}>
      <Img fixed={data.file.childImageSharp.fixed} />
    </SLogo>
  )
}

export default Logo
