import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { getRandomColour } from './actionCreators'
import { 
  getNewColor,
  getCurrentCirclePosition,
 } from './selectors'
import './style/index.scss'

class Home extends Component {

  componentDidMount(){
    this.props.dispatch(getRandomColour())
  }

  refreshColor(){
    this.props.dispatch(getRandomColour())
  }

  render() {
    const {
      new_color,
      position,
    } = this.props

    const classNames = `mycircle position${position}`
    const circleColor = new_color !== null ? `#${new_color}` : '#fff';

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="mybox">
              <div className={classNames} style={{background: circleColor}} onClick={() => this.refreshColor()}></div>
             <ul>
               <li> Fetching data, from: http://www.colr.org/json/color/random.
               </li>
               <li> New color is ...: #{new_color}</li>
               <li>Used: reactjs, redux, axios, babel, webpack, eslint, sass, react-redux-app</li>
             </ul>
            </div>
          </div>
          <div className="w-100"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  new_color: getNewColor(state),
  position: getCurrentCirclePosition(state),

})

export default connect(mapStateToProps, null)(Home)