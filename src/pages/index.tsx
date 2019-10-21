import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/Product"
import { Container } from "../components/styled/common"

const IndexPage = () => (
  <Layout>
    <SEO title="P I Z Z A" />
    <Container>
      <Product />
    </Container>
  </Layout>
)

export default IndexPage
