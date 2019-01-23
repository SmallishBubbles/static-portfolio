import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import mountainImg from "../images/overviewmountainnostrokelong.svg"



// ------------------ Styling ------------------


const Background = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab|Open+Sans:300,400|Sacramento');
  margin: 0%;
  padding: 0%;
  background-image: url(${mountainImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  font-family: 'Josefin Slab', serif;
`

const GoHome = styled.h1`
  display: inline-block;
  padding 2%;
  font-family: 'Sacramento', script;
`

const NavItem = styled.h3`
  display: inline-block;
  padding: 2.5%;
  font-family: 'Josefin Slab', serif;
  float: right;
`


// ------------------- render -----------------------


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  }
    render={data => (
      <Background>
        <Link to={`/`}>
          <GoHome>
            {data.site.siteMetadata.title}
          </GoHome>
        </Link>
        <Link to={`/about/`}>
          <NavItem>
            About
          </NavItem>
        </Link>
        {children}
      </Background>
    )}
  />
)
