import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
class Computer extends Component {
    render() {
        let keyfame = `@keyframes mymove${Date.now()} {
                0%   {top: 0px;}
                25%  {top: -50px;}
                50%  {top: 50px;}
                75%  {top: -50px;}
                100% {top: 0px;}
              }
        `
        const { computer } = this.props;

        return (
            <div className='player'>
                <style>
                    {keyfame}
                </style>
                <div className='think' style={{position:'relative'}}>
                    <img style={{width: 50, height: 50,animation:`mymove${Date.now()} 0.5s  `,position:'absolute',left:'33%' }} className='mt-3' src={computer.hinhAnh}></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 120, height: 120 }} src='../img/playerComputer.png'></img>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        computer: state.OanTuXiReducer.computer,
    }
}
export default connect(mapStateToProps, null)(Computer);
