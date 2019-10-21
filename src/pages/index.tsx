import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/Product"
import { Container } from "../components/styled/common"
import Content from "../components/Content"

const IndexPage = () => (
  <Layout>
    <SEO title="P I Z Z A" />
    <Container>
      <Product />
    </Container>
    <Content />
  </Layout>
)

export default IndexPage
