import React, { Component } from 'react';
import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import classNames from 'classnames';
import 'aos/dist/aos.css'

const AnimateR = props => (
  <div className={ props.componentStyle } data-aos={ props.aos }>
    { props.children }
  </div>
)

export default Watch (
  class FadeRight extends React.Component {
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
        "outR": !this.props.isInViewport,
        "inR": this.props.isInViewport
      })
      return(
        <span>
          { this.props.isInViewport ? (
            <AnimateR
              aos="fade-right"
              componentStyle={ aosClass }
            >
            {this.props.children}
            </AnimateR>

          ) : (
            <AnimateR
              aos="fade-right"
              componentStyle={ aosClass }
            >
            {this.props.children}
            </AnimateR>
          )}
        </span>
      )
    }
  }
)
