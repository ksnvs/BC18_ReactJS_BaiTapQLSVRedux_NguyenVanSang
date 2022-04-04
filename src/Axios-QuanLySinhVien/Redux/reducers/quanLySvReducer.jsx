import {
  GET_DANH_SACH_SV,
  SET_DANH_SACH_SV,
} from "../constant/quanLySvConstant";

const initialState = {
  dssv: [],
};

export const quanLySvReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DANH_SACH_SV:
      state.dssv = payload;
      return { ...state };

    default:
      return { ...state };
  }
};
