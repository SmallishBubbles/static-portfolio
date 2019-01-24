import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"
import mountainImg from "../images/overviewmountainnostrokelong.svg"
import Git from '../images/icons/GitHub-Mark-32px.png'
import LinkedIn from '../images/icons/linkedin.png'
import Etsy from '../images/icons/etsy-icon_lccmlq.png'



// ------------------ Styling ------------------


const Background = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab|Open+Sans:300,400|Sacramento');
  margin: 3em 0% 0%;
  padding: 0%;
  background-image: url(${mountainImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  background-position: 0px 3.5em;
  font-family: 'Josefin Slab', serif;
`

const GoHome = styled.h1`
  display: inline-block;
  font-family: 'Sacramento', script;
  font-size: 2em;
`

const NavItem = styled.h3`
  display: inline-block;
  font-family: 'Josefin Slab', serif;
  float: right;
  margin: 0.2em 0;
`

const Header = styled.header`
  position: fixed;
  background-color: #3EABEA;
  padding: 0.75em;
  top: 0;
  left: 0;
  width: 100%;
  height: 3.5em;
  z-index: 1;
`

const Footer = styled.footer`
  display: absolute;
  bottom: -5px;
  width: 100%;
  height: 3em;
  background-color: #686c4f;
  font-family: 'Sacramento', cursive;
  padding: 0.6em;
`

const SocialLink = styled.img`
    width: 1.5em;
    height: 1.5em;
    display: inline-block;
    float: right;
    margin: 0px 2%;
`

const Contact = styled.div`
    width: 30%;
    height: 30px;
    display: inline-block;
    float: left;
    font-size: 1.5em;
    margin: 0px 2%;
`

const Email = styled.a`
    text-decoration: none;
    color: black;
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
        <Header>
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
        </Header>
        {children}
        <Footer>
          <Contact> <Email href="mailto:marisha.hoza@gmail.com"> Contact me </Email> </Contact>
          <a
              href="https://www.etsy.com/shop/SpicyEskimoArt"
              target="_blank"
              rel="noopener noreferrer"
          >
              <SocialLink src={Etsy}/>
          </a>
          <a
              href="https://github.com/MarishaHoza"
              target="_blank"
              rel="noopener noreferrer"
          >
              <SocialLink src={Git}/>
          </a>
          <a
              href="https://www.linkedin.com/in/marishahoza/"
              target="_blank"
              rel="noopener noreferrer"
          >
              <SocialLink src={LinkedIn}/>
          </a>
        </Footer>
      </Background>
    )}
  />
)
