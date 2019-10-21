import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./Card"
import styled from "styled-components"
import ReactCarousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import "./carousel.css"

const SCarousel = styled.div`
  max-width: 100%;
  position: relative;
`

interface ArrowProps {
  direction: "left" | "right"
}
const Arrow = styled.button<ArrowProps>`
  cursor: pointer;
  background: rgb(51, 51, 51, 0.8);
  border: none;
  outline: none;
  border-radius: 50%;
  color: #fff;
  padding: 0;
  height: 4.5rem;
  width: 4.5rem;

  ::before {
    border-style: solid;
    border-width: 4px 4px 0 0;
    height: 30px;
    width: 30px;
    content: "";
    display: inline-block;
    position: relative;
    top: 0;
    transform: rotate(-45deg);
    vertical-align: top;

    left: ${({ direction }) => (direction === "right" ? "-7px" : "7px")};
    transform: rotate(
      ${({ direction }) => (direction === "right" ? "45" : "-135")}deg
    );
  }
`

interface Props {}

const Carousel: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query CarouselQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/carousel/" } }) {
        edges {
          node {
            id
            frontmatter {
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              name
              account
              avatar {
                childImageSharp {
                  fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <SCarousel>
      <ReactCarousel
        arrowLeft={<Arrow direction="left" />}
        arrowRight={<Arrow direction="right" />}
        addArrowClickHandler
        infinite
        slidesPerPage={5}
        itemWidth={300}
      >
        {data.allMarkdownRemark.edges.map(
          ({ node: { id, frontmatter } }: any) => (
            <Card
              key={id}
              image={frontmatter.image.childImageSharp.fluid}
              name={frontmatter.name}
              account={frontmatter.account}
              avatar={frontmatter.avatar.childImageSharp.fixed}
            />
          )
        )}
      </ReactCarousel>
    </SCarousel>
  )
}

export default Carousel
