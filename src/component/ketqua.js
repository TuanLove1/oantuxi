import React, { Component } from 'react'
import { connect } from 'react-redux/es/exports'
class Ketqua extends Component {
    render() {
        const {ketQua,soBanThang,soBanChoi} = this.props;
        return (
            <div>
                <div className='display-5 mt-3 text-warning'>{ketQua}</div>
                <div className='display-5 text-success'>Số bàn thắng:<span className='text-warning'>{soBanThang}</span></div>
                <div className='display-5 text-success'>Tổng số bàn chơi:<span className='text-warning'>{soBanChoi}</span></div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ketQua: state.OanTuXiReducer.ketQua,
        soBanThang:state.OanTuXiReducer.soBanThang,
        soBanChoi:state.OanTuXiReducer.soBanChoi,
    }
}
export default connect(mapStateToProps,null)(Ketqua)