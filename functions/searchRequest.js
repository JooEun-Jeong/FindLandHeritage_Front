import axios from "axios";

// https://github.com/JooEun-Jeong/22MediAI_frontend/blob/main/src/App.js#L339 의 clickCreate 참고
const searchRequest = async (keyword, searchUrl) => {
  const name = keyword;
  let response;
  try {
    console.log(`${searchUrl}/main/searchresult/${name}`);
    response = await axios.get(`${searchUrl}/main/searchresult/${name}`);
    // console.log(response._response);
  }catch (error) {
    console.log("error: ", error);
  }
  return response.data;
}

export default searchRequest;