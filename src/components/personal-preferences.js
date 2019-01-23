import React from "react"
import styled from "styled-components"

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

const Test = styled.div`
	height: 8.5vw;
	width: 50%;
	display: block;
	float: right;
	clear: right;
	margin: 1em 1em 0em 0em;
	padding: 0%
`

const Test2 = styled.div`
	height: 20vw;
	width: 38%;
	display: block;
	float: left;
	clear: left;
	margin: 3% 0% 0% 3%;
`

const Test3 = styled.div`
	height: 48%;
	width: 38%;
	display: block;
	float: left;
	clear: left;
	margin: 3% 0% 0% 3%;
	text-align: center;
	font-size: 2.5vw;
	color: #686c4f;
`;




export default () => (
    <div>
      <Test2 />

      <Test>
        <City/>
        <SliderBox>
          <SliderLine/>
          <InOutSlider/>
        </SliderBox>
        <Mountains/>
      </Test>
      <Test>
        <Unicorn/>
        <SliderBox>
          <SliderLine />
          <MagicSlider/>
        </SliderBox>
        <Mermaid/>
      </Test>

      <Test3>
        Motto:<br/>
        Be uncommon.
        <br/>
        <br/>
        Hometown:<br/>
        North Pole, AK
        <br/>
        <br/>
        Visit <a href="/feed">my blog</a>
      </Test3>

      <Test>
        <Doggo/>
        <SliderBox>
          <SliderLine />
          <PetSlider/>
        </SliderBox>
        <Cat/>
      </Test>
      <Test>
        <Tea/>
        <SliderBox>
          <SliderLine />
          <DrinkSlider/>
        </SliderBox>
        <Coffee/>
      </Test>

    </div>
)
