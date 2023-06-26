import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFound: false,
  data: []
}
// 추후 필요한 내용 //
// 나중에 결제한 내역들만 구분하는 내용이 필요

// slice = 작은 스토어임
const landownerSlice = createSlice({
  // slice의 이름
  name: 'landowner',
  // 초기값
  initialState,
  // action들을 정의하는 곳
  reducers: {
    insert: (state, action) => {
      // 받은 값이 존재한다면, data 리스트에 넣어준다.
      if (action.payload){
        state.data = (action.payload);
        state.isFound = true;
      }
    },
    clear: (state) => {
      state.data = [];
      state.isFound = false;
    }
  },
});

export const {insert, clear} = landownerSlice.actions;
export default landownerSlice.reducer;