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

// experience Section
import StateStreet from '../images/logos/StateStreet.png';
import Arrow from '../images/logos/Arrow.png';
import SkillSpire from '../images/logos/SkillSpire.png';
import Paper from '../images/logos/paperboat.png';
import OCLogo from '../images/logos/OC.png';
import SpicyEskimo from '../images/logos/SpicyEskimoArt.png';





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



// about section main wrappers
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

// experience Section

const Section3 = styled(Section)`
  background-color: #477ab2;
  background-repeat: no-repeat;
  background-size: 104%;
  width: 100vw;
  height: 79vw;
  margin-top: -1em;
`

const Title = styled.div`
	float: center;
	clear: both;
	margin: auto;
	padding: 2px;
	height: auto;
	width: 50%;
	text-align: center;
	font-size: 3em;
	font-family: 'Sacramento', cursive;
`;

const Education = styled.div`
	float: left;
	clear: left;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin: 7vw 2vw;
	border-radius: 5px 30px;
	text-align: center;
	box-shadow: -2px -2px 5px inset #2d4465;
	padding: 1%;
`;

const Job = styled.div`
	float: right;
	clear: right;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin-right: 2vw;
	border-radius: 30px 5px;
	text-align: center;
	box-shadow: 2px -2px 5px inset #2d4465;
	padding: 1%;
`;

const Resume = styled.div`
	float: left;
	clear: left;
	height: auto;
	width: 30%;
	background-color: white;
	//background-color: rgb(161, 171, 175, 0.75);
	margin: 2vw;
	border-radius: 5px 30px;
	text-align: center;
	box-shadow: -2px -2px 5px inset #2d4465;
	padding: 1%;
`;

const TimelineBox = styled.div`
	margin: 0% auto;
	height: 100%;
	width: 30%;
`

const Timeline = styled.div`
	height: 80%;
	width: 5px;
	border-radius: 5px;
	background-color: darkgrey;
	margin 10% auto;
`

const Line = styled.div`
	position: relative;
	top: -73%;
	height: auto;
	border-bottom: 5px solid darkgrey;
	width: 50%;
	padding: 0%;
	text-align: center;
`

// portfolio

const Section4 = styled(Section)`
  background-color: #7bb1dd;
  margin: -1em 0em;
  width: 100vw;
  height: 75vw;
`

const Project = styled.div`
	width: 30%;
	height: 30%;
	display: inline-block;
	margin: 5% 0% 0% 2%;
	border-radius: 20px;
	text-align: center;
	box-shadow: 0px 2px 10px;
	padding-top: 10%;
	font-size: 3vw;
	background-color: #2c4364;
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


      <Section3>
      <Title> Experience </Title>
      <Education>
        <img src={SkillSpire} width="50%" height="auto" alt="SkillSpire Logo"/>
        <p> Full Stack Web Devolopment Bootcamp </p>
      </Education>
      <Job>
        <img src={Arrow} width="45%" height="auto" alt="Arrow Emblems Logo"/>
        <p> UI Designer - Customer Service Rep </p>
      </Job>
      <Education>
        <img src={OCLogo} width="50%" height="auto" alt="OC Logo"/>
        <p> BBA / Art Minor </p>
      </Education>
      <Job>
        <img src={StateStreet} width="50%" height="auto" alt="State Street Logo"/>
        <p> Functional Specialist / Financial Accountant </p>
      </Job>
      <Resume>
        <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <img src={Paper} width="35%" height="auto" alt="Origami Paper Boat"/>
        </a>
        <p> Prefer to see my resume in <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">paper format?</a>
        <br/>
        **** links need updated ****
        </p>
      </Resume>
      <Job>
        <img src={SpicyEskimo} width="50%" height="auto" alt="Spicy Eskimo Art Logo"/>
        <p> Freelance Art </p>
      </Job>
      <TimelineBox>
        <Timeline/>
        <Line>March-July 2018</Line>
        <Line id="arr">Current</Line>
        <Line id="state">Jan 2016-Aug 2017</Line>
        <Line id="OC"> 2011-2015 </Line>
        <Line id="art"> Ongoing </Line>
      </TimelineBox>
    </Section3>

    <Section4>
        <Title> Portfolio Projects </Title>
        <Project> TBA </Project>
        <Project> TBA </Project>
        <Project> TBA </Project>
        <Project> TBA </Project>
        {/* <Project> Flashcards App Tutorial </Project>
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
