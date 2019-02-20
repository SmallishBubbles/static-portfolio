import React from "react"
import { Link, graphql } from "gatsby"

// animations
import FadeRight from "../components/animate-fade-right"


// import { css } from "@emotion/core"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import styled from "styled-components"
import PersonalPreferences from "../components/personal-preferences"
import ExperienceTimeline from "../components/timeline"

// ---- move to png files and gatsby image later
import selfperson from "../images/icons/selfperson.svg"
import forest from "../images/aboutmeforestbluelong.svg"

// project images
import bubbleChart from "../images/projects/bubbleChart.png"
import gameOfLife from "../images/projects/gameOfLife.png"



// ------------------ Styling ------------------

const Section = styled.div `
  max-width: 100%;
  min-height: 90vh;
  margin: 0%;
  text-align: center;
  border: 0.1px solid transparent;
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
  //height: 75vw;
  height: auto;
  margin-top: -1em;
  position: relative;
  overflow: hidden;
  min-height: 100px;
`
const Skip = styled.button`
  font-size: 1em;
  margin: 0 1em 1em;
  padding: 0.25em 1em;
  border: 3px solid #2D4465;
  background-color: #344f76;
  border-radius: 30px;
  :hover {
    background-color: #954879;
  }
  :active, :focus, :visited {
    outline: 0;
  }
`


// about section main wrappers
const WrapperLeft = styled.div`
	width: 47%;
  display: absolute;
	// background-color: #344f76;
	height: 83%;
	margin-left: 2%;
	margin-top: 12%;
  margin-bottom: 1em;
	float: left;
	border-radius: 30px 400px 30px 30px;
`

const Skill = styled.div`
  width: 90%;
	height: auto;
	border-radius: 20px;
	margin: 2% 2%;
	padding: 1% 1%;
	background-color: #344f76;
	font-size: 1em;
`

const SkillTitle = styled(Skill)`
  text-align: center;
  font-size: 2.5em;
  font-family: 'Sacramento', cursive;
  height: 1.1em;
  padding: 0;
  background-color: transparent;
`

const Blurb = styled.div`
	width: 85%;
	height: auto;
	border-radius: 20px 350px 20px 20px;
	margin: 10% 2% 4%;
	background-color: #344f76;
	padding: 5%;
  font-size: calc(10px + 1.5vw);
  text-align:left;
`;

const Right = styled.div`
	text-align: right;
	margin-top: 3%;
	font-style: italic;
`

// experience Section

const Section3 = styled(Section)`
  background-color: #2D4465;
  width: 100vw;
  height: auto;
  margin-top: -1em;
  position: relative;
  overflow: hidden;
  min-height: 100px;
`

const Title = styled.div`
	margin: 0.25em auto 0;
	height: auto;
	width: 90%;
	text-align: center;
	font-size: 2.5em;
	font-family: 'Sacramento', cursive;
`



// portfolio

const Section4 = styled(Section)`
  background-color: #2D4465;
  width: 100vw;
  height: auto;
  min-height: 80vh;
`

const Project = styled.a`
	width: 25vw;
  min-width: 250px;
	height: 20vw;
  min-height: 200px;
	display: inline-block;
	margin: 2%;
  border-radius: 32% 68% 31% 69% / 47% 17% 83% 53%;
  text-align: center;
  padding-top: 2%;
  font-size: 3vw;
  background-color: #344F76;

  &:hover {
  	box-shadow: 0px 2px 10px black;
  }
`

const Project1 = styled(Project)`
  background-image: url(${bubbleChart});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: relative;
  background-position: center;
`

const Project2 = styled(Project)`
  background-image: url(${gameOfLife});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: relative;
  background-position: center;
`

const ProjectHolder = styled.div`
  display: inline-block;
  width: 25vw;
  min-width: 250px;
	height: auto;
  min-height: 200px;
	display: inline-block;
	margin: 2%;
  text-align: center;
  font-size: 3vw;
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
        <p>Skip to:</p>
        <a
          href="https://docs.google.com/document/d/1Efyzk2zBMCjqcZrsAhfZnyvCUOUL8ih1VVhvFpae2VQ/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer">
            <Skip>My paper resume</Skip>
        </a>
        <Link to="/#portfolio">
          <Skip>My portfolio</Skip>
        </Link>
        
      </Section>


      <Section2>
        <WrapperLeft>
          <FadeRight>
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
          </FadeRight>
          <SkillTitle>Skills</SkillTitle>
					<FadeRight><Skill>HTML</Skill></FadeRight>
					<FadeRight><Skill>CSS</Skill></FadeRight>
					<FadeRight><Skill>JavaScript</Skill></FadeRight>
					<FadeRight><Skill>React.js</Skill></FadeRight>
          <FadeRight><Skill>Gatsby.js</Skill></FadeRight>
					<FadeRight><Skill>GraphQL</Skill></FadeRight>
					<FadeRight><Skill>Node / Express</Skill></FadeRight>
					<FadeRight><Skill>NPM & Yarn</Skill></FadeRight>
					<FadeRight><Skill>Git & GitHub</Skill></FadeRight>
          <FadeRight><Skill>Adobe Suite</Skill></FadeRight>
				</WrapperLeft>
        <PersonalPreferences/>
      </Section2>


      <Section3>
        <Title> Experience </Title>
        <ExperienceTimeline/>
      </Section3>

      <a name ="portfolio"/>
      <Section4>
          <Title> Portfolio Projects </Title>
          <ProjectHolder>
            Bubble Chart
            <Project1 href="http://marisha-hoza-d3v4-bubblechart.surge.sh"/>
          </ProjectHolder>
          <ProjectHolder>
            Game of Life
            <Project2 href="http://marisha-hoza-gameoflife.surge.sh"/>
          </ProjectHolder>
          <ProjectHolder>
            TBA
            <Project/>
          </ProjectHolder>
          {/* <Project> TBA </Project>
          <Project> Flashcards App Tutorial </Project>
          <Project> Full-Stack Tutorial </Project>
          <Project> Etsy and/or Art Portfolio Website </Project>
          <Project> You.Me.We Community (??) </Project> */}
      </Section4>




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
