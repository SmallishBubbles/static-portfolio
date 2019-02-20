import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"


const Background = styled.div`
  max-width: 100%;
  margin: 0%;
  text-align: center;
  border: 0.1px solid transparent;
  width: 100vw;
  min-height: calc(100vh - 6em);
  font-family: sans-serif;
`

export default ({ data }) => (
  <Layout>
    <Background>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        I will add an about section later. Probably. Thanks for stopping by!
      </p>
    </Background>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
