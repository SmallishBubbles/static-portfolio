import React, { Component } from "react"
import styled from "styled-components"

// hopefully Animate
import FadeLeft from "./animate-fade-left"

// icons
import cat from "../images/icons/cat.svg"
import city from "../images/icons/city.svg"
import coffee from "../images/icons/coffee.svg"
import doggo from "../images/icons/doggo.svg"
import mermaid from "../images/icons/mermaid.svg"
import mountains from "../images/icons/mountains.svg"
import tea from "../images/icons/tea.svg"
import unicorn from "../images/icons/unicorn.svg"


const AboutPic = styled.div`
	height: 90%;
	width: 35%;
	display: inline-block;
	margin: 1%;
`
const Cat = styled(AboutPic)`
  background-image: url(${cat});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 55%;
`
const City = styled(AboutPic)`
  background-image: url(${city});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
`
const Coffee = styled(AboutPic)`
  background-image: url(${coffee});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 59%;
`
const Doggo = styled(AboutPic)`
  background-image: url(${doggo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 55%;
`
const Mermaid = styled(AboutPic)`
  background-image: url(${mermaid});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95%;
`
const Mountains = styled(AboutPic)`
  background-image: url(${mountains});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`
const Tea = styled(AboutPic)`
  background-image: url(${tea});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;
`
const Unicorn = styled(AboutPic)`
  background-image: url(${unicorn});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95%;
`


const SliderBox = styled.div`
	height: 90%;
	width: 24%;
	display: inline-block;
	margin: 1%;
`

const SliderLine = styled.div`
	width: 100%;
	height: 2px;
	background-color: darkgrey;
	margin: 70% auto;
`

const Slider = styled.div`
	width: 20%;
	height: 20%;
	border-radius: 5px;
	background-color: grey;
	position: relative;
	top: -63%;
	left: 40%;
`
const InOutSlider = styled(Slider)`
  left: 75%;
`
const MagicSlider = styled(Slider)`
  left: 15%;
`
const PetSlider = styled(Slider)`
  left: 70%;
`
const DrinkSlider = styled(Slider)`
  left: 30%;
`

const WrapperRight = styled.div`
	width: 47%;
  display: relative;
	background-color: #344f76;
	height: auto;
	margin-right: 2%;
	margin-top: 35%;
  margin-bottom: 1em;
	float: right;
  border-radius: 67% 8% 8% 8% / 38% 8% 8% 8%;
	// border-radius: 400px 30px 30px 30px;
	padding: 2vh 0% 1vh;
`

const ChoiceBox = styled.div`
	height: 8.5vw;
	width: 50%;
  min-width: 150px;
  min-height: 55px;
  float: right;
  clear: right;
	margin: 1.5em 1em 0em auto;
	padding: 0%;
`

const AboutTitle = styled(ChoiceBox)`
  height: auto;
  text-align: center;
  font-size: 2.5em;
  font-family: 'Sacramento', cursive;
  margin-right: 0.5em;
  margin-top: 0;
  margin-bottom: -0.75em;
  @media (max-width:800px){
    font-size: 2em;
  }
  @media (max-width:700px){
    font-size: 1.5em;
  }
`

const Test3 = styled.div`
	width: 38%;
  min-width: 150px;
	float: left;
  clear: left;
	margin: 20% 0% 0% 3%;
	text-align: center;
	font-size: calc(10px + 1.5vw);
	color: #686c4f;
  @media (max-width:700px){
    float: right;
    clear: right;
    margin: 0 8%;
  }
`

const Fact = styled.div`
  height: auto;
  width: 100%;
  text-align: center;
  margin: 30% 0;
  @media (max-width:700px){
    margin: 8% 0;
  }
`




export default () => (
  <FadeLeft>
    <WrapperRight>
      <AboutTitle>
        About Me
      </AboutTitle>

      <Test3>
        <Fact>
          Motto:<br/>
          Be uncommon.
        </Fact>
        <Fact>
          Hometown:<br/>
          North Pole, AK
        </Fact>
        <Fact>
          Visit <a href="/feed">my blog</a>
        </Fact>

      </Test3>

      <ChoiceBox>
        <City/>
        <SliderBox>
          <SliderLine/>
          <InOutSlider/>
        </SliderBox>
        <Mountains/>
      </ChoiceBox>
      <ChoiceBox>
        <Unicorn/>
        <SliderBox>
          <SliderLine />
          <MagicSlider/>
        </SliderBox>
        <Mermaid/>
      </ChoiceBox>
      <ChoiceBox>
        <Doggo/>
        <SliderBox>
          <SliderLine />
          <PetSlider/>
        </SliderBox>
        <Cat/>
      </ChoiceBox>
      <ChoiceBox>
        <Tea/>
        <SliderBox>
          <SliderLine />
          <DrinkSlider/>
        </SliderBox>
        <Coffee/>
      </ChoiceBox>
    </WrapperRight>
  </FadeLeft>
)
