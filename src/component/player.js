import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    renderMangDC = () => {
        const { mangDatCuoc, datCuoc } = this.props;
        return mangDatCuoc.map((item, index) => {
            return (
                <div key={index} className='col-4'>
                    <button onClick={() => {
                        datCuoc(item.ma)
                    }} style={item.datCuoc ? { border: '2px solid orange' } : { border: '' }} className='btnItem'>
                        <img src={item.hinhAnh}></img>
                    </button>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='player'>
                <div className='think'>
                    <img className='mt-3' style={{ width: 50, height: 50 }} src={this.props.mangDatCuoc.find((item) => item.datCuoc === true).hinhAnh}></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 120, height: 120 }} src='../img/player.png'></img>

                <div className='row'>
                    {this.renderMangDC()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.OanTuXiReducer.mangDatCuoc,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_BAO_BUA_KEO',
                payload: maCuoc,
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);