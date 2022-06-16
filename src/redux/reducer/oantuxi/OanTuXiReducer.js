const stateDefault = {
    mangDatCuoc: [
        { ma: 'bua', hinhAnh: '../img/bua.png', datCuoc: true },
        { ma: 'keo', hinhAnh: '../img/keo.png', datCuoc: false },
        { ma: 'bao', hinhAnh: '../img/bao.png', datCuoc: false }
    ],
    ketQua: '???????',
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'bua', hinhAnh: '../img/bua.png' }
}

const OanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_BAO_BUA_KEO': {
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item) => {
                if (item.ma == action.payload) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangDatCuocUpdate;
            return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            state.computer = state.mangDatCuoc[soNgauNhien];
            return { ...state }
        }
        case 'END_GAME':
            let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'hoa nhau!!!';
                    } else if (computer.ma == 'bua') {
                        state.ketQua = 'ban da thua';
                    } else {
                        state.ketQua = ' ban thang!!!'
                        state.soBanThang += 1;
                    }
                    break;
                }
                case 'bua': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'ban thang!!!';
                        state.soBanThang += 1;

                    } else if (computer.ma == 'bua') {
                        state.ketQua = 'ban hoa!!!';
                    } else {
                        state.ketQua = ' ban thua!!!'
                    }
                    break;
                }
                case 'bao': {
                    if (computer.ma === 'keo') {
                        state.ketQua = 'ban thua!!!';
                    } else if (computer.ma == 'bua') {
                        state.ketQua = 'ban thang';
                        state.soBanThang += 1;

                    } else {
                        state.ketQua = ' ban hoa!!!'
                    }
                    break;
                }
                default:
                    state.ketQua = 'ban thang';
            }
            state.soBanChoi += 1;

            return { ...state }
        default: return { ...state }
    }
}
export default OanTuXiReducer;