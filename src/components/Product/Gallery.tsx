import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SGallery = styled.div`
  flex: 1 0 50%;
  margin-right: 3rem;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 2rem;
`

const Thumbnail = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
`

interface Props {}

const Gallery: React.FC<Props> = () => {
  const [current, setCurrent] = useState(0)

  const handleClick = (index: number) => setCurrent(index)

  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query GalleryQuery {
      allFile(filter: { relativePath: { regex: "/product/pizza-/" } }) {
        edges {
          node {
            childImageSharp {
              id
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <SGallery>
      <div>
        {edges.map(({ node }: any, index: number) => (
          <Thumbnail
            key={node.childImageSharp.id}
            onClick={() => handleClick(index)}
          >
            <Img fluid={node.childImageSharp.fluid} />
          </Thumbnail>
        ))}
      </div>
      <div>
        <Img fluid={edges[current].node.childImageSharp.fluid} />
      </div>
    </SGallery>
  )
}

export default Gallery
