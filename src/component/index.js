import React, { Component } from 'react';
import Computer from './computer';
import '.././assets/css/buble.css';
import Player from './player';
import Ketqua from './ketqua';
import { connect } from 'react-redux/es/exports';
class GameOanTuXi extends Component {
  render() {
    return (
      <div className='game'>
        <div className='row text-center mt-5'>
          <div className='col-4' >
            <Player />
          </div>
          <div className='col-4 mt-3' >
            <Ketqua />
            <button onClick={() => {
              this.props.ranDom();
            }} className='btn btn-success mt-3'>Play Game</button>
          </div>
          <div className='col-4' >
            <Computer />
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispactch) => {
  return {
    ranDom: () => {
      let count = 0;
      let lapLaiHam = setInterval(() => {
        let action = {
          type: 'RAN_DOM',
        }
        dispactch(action)
        count++;
        if (count > 10) {
          clearInterval(lapLaiHam)
          dispactch({
            type:'END_GAME',
          })
        }
        
      }, 100)
      
      
    }
  }
}
export default connect(null, mapDispatchToProps)(GameOanTuXi)
