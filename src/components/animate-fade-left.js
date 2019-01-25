import React, { Component } from 'react';
import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import classNames from 'classnames';
import 'aos/dist/aos.css'

const AnimateStyle = props => (
  <div className={ props.componentStyle } data-aos={ props.aos }>
    { props.children }
  </div>
)

export default Watch (
  class FadeLeft extends React.Component {
    componentDidMount() {
      this.aos = AOS;
      this.aos.init({
        duration: 1000
      });
    }
    componentDidUpdate() {
      this.aos.refresh();
    }
    render () {
      const aosClass = classNames({
        "aos-init": true,
        "outL": !this.props.isInViewport,
        "inL": this.props.isInViewport
      })
      return(
        <span>
          { this.props.isInViewport ? (
            <AnimateStyle
              aos="fade-left"
              componentStyle={ aosClass }
            >
            {this.props.children}
            </AnimateStyle>

          ) : (
            <AnimateStyle
              aos="fade-left"
              componentStyle={ aosClass }
            >
            {this.props.children}
            </AnimateStyle>
          )}
        </span>
      )
    }
  }
)
