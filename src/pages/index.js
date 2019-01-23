import React from "react"
import { Link, graphql } from "gatsby"
// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styled from "styled-components"
import PersonalPreferences from "../components/personal-preferences"

// ---- move to png files and gatsby image later
import selfperson from "../images/icons/selfperson.svg"
import forest from "../images/aboutmeforestbluelong.svg"





// ------------------ Styling ------------------

const Section = styled.div `
  max-width: 100%;
  min-height: 90vh;
  margin: 0%;
  text-align: center;
`
const Selfperson = styled.div `
  width: 10em;
  height: 10em;
  border-radius: 50%;
  margin: auto;
  margin-top: 20vh;
  box-shadow: 0px 0px 10px;
  background-image: url(${selfperson});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`
const HeaderName = styled.h1 `
  font-family: 'Sacramento', script;
  font-size: 3em;
  padding: 0px;
  margin: 2% 0% 0%;
`
const HeaderTitle = styled.h1 `
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab|Open+Sans:300,400|Sacramento');
  font-family: 'Open Sans', sans-serif;
`

const Section2 = styled(Section) `
  background-image: url(${forest});
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100vw;
  height: 75vw;
`



// --------------------- main wrappers ---------------------------
const WrapperLeft = styled.div`
	width: 47%;
	// background-color: #344f76;
	height: 83%;
	margin-left: 2%;
	margin-top: 12%;
	float: left;
	border-radius: 30px 400px 30px 30px;
`;

const WrapperRight = styled.div`
	width: 47%;
	background-color: #344f76;
	height: auto;
	margin-right: 2%;
	margin-top: 27%;
	float: right;
	border-radius: 400px 30px 30px 30px;
	padding: 2vh 0% 1vh;
`;

const Skill = styled.div`
	width: 90%;
	height: auto;
	border-radius: 20px;
	margin: 2% 2%;
	padding: 1% 1%;
	background-color: #344f76;
	font-size: 1.5vw;
`;

const Blurb = styled.div`
	width: 85%;
	height: auto;
	border-radius: 20px 350px 20px 20px;
	margin: 10% 2% 4%;
	background-color: #344f76;
	padding: 5%;
	font-size: 2.5vw;
  text-align:left;
`;

const Right = styled.div`
	text-align: right;
	margin-top: 3%;
	font-style: italic;
`



// ------------------- render -----------------------


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Section>
  			<Selfperson/>
  			<HeaderName>{data.site.siteMetadata.title} {/*Marisha Hoza*/}</HeaderName>
  			<HeaderTitle>Front End Web Developer</HeaderTitle>
  			<p>Skip to <a href="" target="_blank" rel="noopener noreferrer">my paper resume </a>*to be added*</p>
        <p>Please pardon the mess, I am in the middle of moving my portfolio to this location. </p>
      </Section>


      <Section2>
        <WrapperLeft>
					<Blurb>
						<div>
							Capability is not based on
							<br/>
							age or experience, but on how much you're willing to learn.
							<br/>
						</div>
						<Right>
							- Stacey Abrams
						</Right>
					</Blurb>
					<Skill>HTML</Skill>
					<Skill>CSS</Skill>
					<Skill>JavaScript</Skill>
					<Skill>React</Skill>
					<Skill>GraphQL</Skill>
					<Skill>Node / Express</Skill>
					<Skill>NPM & Yarn</Skill>
					<Skill>Git & GitHub</Skill>
          <Skill>Adobe Suite</Skill>
				</WrapperLeft>

        <WrapperRight>
          <PersonalPreferences/>
        </WrapperRight>
      </Section2>




        {/*
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                  text-decoration: none;
                  color: inherit;
                `
              }
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
        */}


    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
