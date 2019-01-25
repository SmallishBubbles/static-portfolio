import React, { Component } from 'react';
import AOS from 'aos';
import { Watch } from 'scrollmonitor-react';
import classNames from 'classnames';
import 'aos/dist/aos.css'

const AnimateZoom = props => (
  <div className={ props.componentStyle } data-aos={ props.aos }>
    { props.children }
  </div>
)

export default Watch (
  class ZoomIn extends React.Component {
    componentDidMount() {
      this.aos = AOS;
    }
    componentDidUpdate() {
      this.aos.refresh();
    }
    render () {
      const aosClass = classNames({
        "zoomOut": !this.props.isInViewport,
        "zoomIn": this.props.isInViewport
      })
      return(
        <span>
          { this.props.isInViewport ? (
            <AnimateZoom
              aos="zoom-in"
              aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
              componentStyle={ aosClass }
            >
            {this.props.children}
          </AnimateZoom>

          ) : (
            <AnimateZoom
              aos="zoom-out"
              aos-anchor-placement="bottom-bottom"
              data-aos-duration="3000"
              componentStyle={ aosClass }
            >
            {this.props.children}
          </AnimateZoom>
          )}
        </span>
      )
    }
  }
)
