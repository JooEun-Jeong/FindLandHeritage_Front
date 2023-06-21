import axios from "axios";

const googleLogin = async (loginUrl) => {
  let response;
  try{
    console.log(`${loginUrl}/auth/googleLogin`);
    response = await axios.get(`${loginUrl}/auth/googleLogin`);
  }catch(err){
    console.log("errs: ", err);
  }
}

const appleLogin = () => {

}

const kakaoLogin = () => {

}

export {googleLogin, appleLogin, kakaoLogin};