// your Bomb code here!

import React, { Component } from 'react';

export default class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    countDown = () => {
        if (this.props.initialCount > 0){
          return  `${this.props.initialCount} ` + `seconds left before I go boom!`
        }else{
          return `Boom!`
        }
      }

    render (){
        console.log(this.props)
        return(
            <div>
               {this.countDown()}
            </div>
        )

    }
}