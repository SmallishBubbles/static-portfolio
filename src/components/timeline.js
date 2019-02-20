import React from "react"
import styled from "styled-components"
// images
import StateStreet from '../images/logos/StateStreet.png'
import Arrow from '../images/logos/Arrow.png'
import SkillSpire from '../images/logos/SkillSpire.png'
import Paper from '../images/logos/paperboat.png'
import OCLogo from '../images/logos/OC.png'
import SpicyEskimo from '../images/logos/SpicyEskimoArt.png'
// animations
import FadeLeft from "./animate-fade-left"
import FadeRight from "./animate-fade-right"
import ZoomIn from "./animate-zoom-in"


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
  //background-color: white;
	background-color: #344F76;
	margin: 2vw;
	border-radius: 25px;
	text-align: center;
  box-shadow: 2px 2px 5px;
	// box-shadow: -2px -2px 5px inset #2d4465;
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
  margin-top: 3vw;
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
  margin-top: 5vw;
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

const Links = styled.a`
  text-decoration: none;
  color: lightgrey;
  &:hover {
    color: #3EABEA;
  }
`



export default () => (
  <div>
    <Timeline/>

    <TimeSection>
      <ZoomIn>
        <TimeDot/>
      </ZoomIn>
      <FadeRight>
        <TimeArrow/>
        <ExperienceL>
          <img src={SkillSpire} width="50%" height="auto" alt="SkillSpire Logo"/>
          <p> Full Stack Web Devolopment Bootcamp </p>
          <p> March-July 2018 </p>
        </ExperienceL>
      </FadeRight>
    </TimeSection>

    <TimeSection>
      <ZoomIn>
        <TimeDot/>
      </ZoomIn>
      <FadeLeft>
        <TimeArrowL/>
        <ExperienceR>
          <img src={Arrow} width="45%" height="auto" alt="Arrow Emblems Logo"/>
          <p> UI Designer - Customer Service Rep </p>
          <p> Current </p>
        </ExperienceR>
      </FadeLeft>
    </TimeSection>

    <TimeSection>
      <ZoomIn>
        <TimeDot/>
      </ZoomIn>
      <FadeRight>
        <TimeArrow/>
        <ExperienceL>
          <img src={OCLogo} width="50%" height="auto" alt="OC Logo"/>
          <p> BBA / Art Minor </p>
          <p> 2011-2015 </p>
        </ExperienceL>
      </FadeRight>
    </TimeSection>

    <TimeSection>
      <ZoomIn>
        <TimeDot/>
      </ZoomIn>
      <FadeLeft>
        <TimeArrowL/>
        <ExperienceR>
          <img src={StateStreet} width="50%" height="auto" alt="State Street Logo"/>
          <p> Functional Specialist / Financial Accountant </p>
          <p> Jan 2016 - Aug 2017 </p>
        </ExperienceR>
      </FadeLeft>
    </TimeSection>

    <TimeSection>
      <ZoomIn>
        <TimeDot/>
      </ZoomIn>
      <FadeRight>
        <TimeArrow/>
        <ExperienceL>
          <a href="https://docs.google.com/document/d/1Efyzk2zBMCjqcZrsAhfZnyvCUOUL8ih1VVhvFpae2VQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src={Paper} width="35%" height="auto" alt="Origami Paper Boat"/>
          </a>
          <p> Prefer to see my experience in <Links href="https://docs.google.com/document/d/1Efyzk2zBMCjqcZrsAhfZnyvCUOUL8ih1VVhvFpae2VQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">resume format</Links>?
          </p>
        </ExperienceL>
      </FadeRight>
    </TimeSection>

    <TimeSection>
      <ZoomIn>
        <TimeDot/>
      </ZoomIn>
      <FadeLeft>
        <TimeArrowL/>
        <ExperienceR>
          <img src={SpicyEskimo} width="50%" height="auto" alt="Spicy Eskimo Art Logo"/>
          <p> Freelance Art </p>
          <p> Ongoing </p>
        </ExperienceR>
      </FadeLeft>
    </TimeSection>

  </div>
)
