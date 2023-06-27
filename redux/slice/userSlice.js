import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
  "user": {
    "userID": 1,
    "selectIDs": [],
    "count": {
      "cname": 0,
      "buyerAddr": 0,
      "jibun": 0,
      "area": 0
    },
    "selectedProduct": {},
    "paidProduct": {},
  }
}
// 추후 필요한 내용 //
// 나중에 결제한 내역들만 구분하는 내용이 필요

// slice = 작은 스토어임
const userSlice = createSlice({
  // slice의 이름
  name: 'userInfo',
  // 초기값
  initialState,
  // action들을 정의하는 곳
  reducers: {
    // 선택항목들의 상태를 업데이트
    addChecks: (state, action) => {
      // 받은 값이 존재한다면, user의 data에 저장해줌
      if (action.payload) {
        let givenJson = action.payload; // userId 필요, 체크한 번호 필요, 상태 필요

        // console.log("given payload ", givenJson);
        const userId = givenJson.userId; // Cell의 dispatch addchecks를 통해 넘어온 값임
        const shownId = givenJson.shownId; // 화면에 보이며, 체크된 번호
        const realId = givenJson.realId; // 실제 ID
        const product = givenJson.productItem; // String, ex. c(한자), b(매수자주소), j(지번), a(면적)

        // 번호자체가 없는 경우, 미리 생성
        // console.log("FirstState in addchecks ", state);
        if (!state.user["selectIDs"].includes(shownId)) {
          // console.log("hhh");
          state.user["selectIDs"].push(shownId);
          // 0 c(한자), 1 b(매수자주소), 2 j(지번), 3 a(면적)
          state.user["selectedProduct"][realId] = [false, false, false, false];
        }

        const productState = true;
        let productStatuslst = state.user["selectedProduct"][realId];
        let userCount = state.user.count;
        if (product === 'c') {
          productStatuslst[0] = productState;
          // console.log("show selected c ", realId, state.user["selectedProduct"][realId]);
          userCount.cname += 1;
        }
        else if (product === 'b') {
          productStatuslst[1] = productState;
          // console.log("show selected b ", realId, state.user["selectedProduct"][realId]);
          userCount.buyerAddr += 1;
        }
        else if (product === 'j') {
          productStatuslst[2] = productState;
          // console.log("show selected j ", realId, state.user["selectedProduct"][realId]);
          userCount.jibun += 1;
        }
        else if (product === 'a') {
          productStatuslst[3] = productState;
          // console.log("show selected a ", realId, state.user["selectedProduct"][realId]);
          userCount.area += 1;
        } else {
          console.log("wrong things happened in userSlice addchecks");
        }
      }
    },

    stateShow: (state) => {
      console.log("changed state in stateshow: ", state);
    },

    // 선택해제 항목들의 상태를 업데이트
    cancelChecks: (state, action) => {
      if (action.payload) {
        let givenJson = action.payload; // userId 필요, 체크한 번호 필요, 상태 필요

        // console.log("given payload delete: ", givenJson);
        const userId = givenJson.userId; // Cell의 dispatch addchecks를 통해 넘어온 값임
        const shownId = givenJson.shownId; // 화면에 보이며, 체크된 번호
        const realId = givenJson.realId; // 실제 ID
        const product = givenJson.productItem; // String, c(한자), b(매수자주소), j(지번), a(면적)

        // console.log("FirstState in cancelchecks ", state);
        // 번호자체가 없는 경우, 미리 생성
        if (!state.user["selectIDs"].includes(shownId)) {
          console.log("wrong access! in cancelchecks ");
        }

        const productState = false;
        let productStatuslst = state.user["selectedProduct"][realId];
        let userCount = state.user.count;
        // cname: 0 / buyeraddr: 1 / jibun: 2 / area: 3
        if (product === 'c') {
          productStatuslst[0] = productState;
          // console.log("show selected c ", realId, state.user["selectedProduct"][realId]);
          userCount.cname -= 1;
        }
        else if (product === 'b') {
          productStatuslst[1] = productState;
          // console.log("show selected b ", realId, state.user["selectedProduct"][realId]);
          userCount.buyerAddr -= 1;
        }
        else if (product === 'j') {
          productStatuslst[2] = productState;
          // console.log("show selected j ", realId, state.user["selectedProduct"][realId]);
          userCount.jibun -= 1;
        }
        else if (product === 'a') {
          productStatuslst[3] = productState;
          // console.log("show selected a ", realId, state.user["selectedProduct"][realId]);
          userCount.area -= 1;
        } else {
          console.log("wrong things happened in userSlice cancelchecks");
        }

        if (!productStatuslst.includes(true)) {
          // product status 리스트에 true가 단 한개라도 없다면 해당 product는 selectlist에서 지워
          delete state.user["selectedProduct"][realId];
          // selectIDs에서도 삭제
          state.user["selectIDs"] = state.user["selectIDs"].filter((item) => item !== shownId);
        }
      }
    },

    reinitializeState: (state) => {
      state.user = {
        "userID": 1,
        "selectIDs": [],
        "count": {
          "cname": 0,
          "buyerAddr": 0,
          "jibun": 0,
          "area": 0
        },
        "selectedProduct": {},
        "paidProduct": {},
      };
    }

    // 지불된 항목들을 처리
  },
});

export const { addChecks, cancelChecks, stateShow, reinitializeState } = userSlice.actions;
export default userSlice.reducer;