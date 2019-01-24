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
  background-color: #2D4465;
  width: 100vw;
  height: auto;
  margin-top: -1em;
  position: relative;
  overflow: hidden;
  min-height: 100px;
`

const Title = styled.div`
	float: center;
	clear: both;
	margin: 2vh auto;
	padding: 2px;
	height: auto;
	width: 90%;
	text-align: center;
	font-size: 2.5em;
	font-family: 'Sacramento', cursive;
`

const TimeSection = styled.div`
  width: 100vw;
  height: auto;
  float: left;
  clear: both;
`

const ExperienceL = styled.div`
	height: auto;
	width: 43%;
  min-width: 300px;
	background-color: #344F76;
	margin: 2vw;
	border-radius: 25px;
	text-align: center;
	box-shadow: -2px -2px 5px inset #2d4465;
	padding: 1%;
  @media (max-width:700px){
    margin-left: 15vw;
  }
`

const ExperienceR = styled(ExperienceL)`
  float: right;
  @media (max-width:700px){
    float: none;
    margin-left: 15vw;
  }
`

const Timeline = styled.div`
	height: 90%;
	width: 5px;
	border-radius: 5px;
	background-color: darkgrey;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  left: 0;
  right: 0;
  @media (max-width:700px){
    margin-left: 5vw;
  }
`
const TimeArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 20px solid #344F76;
  position: absolute;
  margin-top: 5vw;
  margin-left: 44.5%;
  box-shadow: -2px -2px 5px inset #2d4465;
  @media (max-width:700px){
    margin-left: 11.5vw;
    transform: rotate(180deg);
  }
`
const TimeArrowL = styled(TimeArrow)`
  right: 0;
  margin-left: auto;
  margin-right: 44.5%;
  transform: rotate(180deg);
  @media (max-width:700px){
    left: 0;
    margin-left: 11.5vw;
    transform: rotate(180deg);
  }
`
const TimeDot = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.25vw;
  width: 25px;
  height: 25px;
  border: 5px solid darkgrey;
  border-radius: 50%;
  background-color: #2d4465;
  @media (max-width:700px){
    margin-left: 2.5vw;
  }
`


// portfolio

const Section4 = styled(Section)`
  background-color: #2D4465;
  width: 100vw;
  height: auto;
  min-height: 80vh;
`

const Project = styled.div`
	width: 25vw;
  min-width: 250px;
	height: 20vw;
  min-height: 200px;
	display: inline-block;
	margin: 2%;
  border-radius: 32% 68% 31% 69% / 47% 17% 83% 53%;
  text-align: center;
	box-shadow: 0px 2px 10px;
	padding-top: 10%;
	font-size: 3vw;
	background-color: #344F76;
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
      <Timeline/>
      <TimeSection>
        <TimeArrow/>
        <TimeDot/>
        <ExperienceL>
          <img src={SkillSpire} width="50%" height="auto" alt="SkillSpire Logo"/>
          <p> Full Stack Web Devolopment Bootcamp </p>
          <p> March-July 2018 </p>
        </ExperienceL>
      </TimeSection>
      <TimeSection>
        <TimeArrowL/>
        <TimeDot/>
        <ExperienceR>
          <img src={Arrow} width="45%" height="auto" alt="Arrow Emblems Logo"/>
          <p> UI Designer - Customer Service Rep </p>
          <p> Current </p>
        </ExperienceR>
      </TimeSection>
      <TimeSection>
        <TimeArrow/>
        <TimeDot/>
        <ExperienceL>
          <img src={OCLogo} width="50%" height="auto" alt="OC Logo"/>
          <p> BBA / Art Minor </p>
          <p> 2011-2015 </p>
        </ExperienceL>
      </TimeSection>
      <TimeSection>
        <TimeArrowL/>
        <TimeDot/>
        <ExperienceR>
          <img src={StateStreet} width="50%" height="auto" alt="State Street Logo"/>
          <p> Functional Specialist / Financial Accountant </p>
          <p> Jan 2016 - Aug 2017 </p>
        </ExperienceR>
      </TimeSection>
      <TimeSection>
        <TimeArrow/>
        <TimeDot/>
        <ExperienceL>
          <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={Paper} width="35%" height="auto" alt="Origami Paper Boat"/>
          </a>
          <p> Prefer to see my resume in <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">paper format?</a>
          <br/>
          **** links need updated ****
          </p>
        </ExperienceL>
      </TimeSection>
      <TimeSection>
        <TimeArrowL/>
        <TimeDot/>
        <ExperienceR>
          <img src={SpicyEskimo} width="50%" height="auto" alt="Spicy Eskimo Art Logo"/>
          <p> Freelance Art </p>
          <p> Ongoing </p>
        </ExperienceR>
      </TimeSection>
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
