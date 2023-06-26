import { useState } from "react";
import axios from "axios";

const usePostData = (requestURL, postData) => {
  const [postInformation, setPostInformation] = useState();
  const postUserInfo = async() => {
    try{
    await axios.post(requestURL, postData).then((response) => {
      setPostInformation(response.data);
    });
  }catch(error){
    console.log(error);
  }
  };
  return {
    postInformation,
    postUserInfo,
  };
};

export default usePostData;
