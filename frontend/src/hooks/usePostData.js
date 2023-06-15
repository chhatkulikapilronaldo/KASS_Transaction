import React, { useEffect, useState } from "react";
import axios from "axios";

const usePostData = (requestURL, postData) => {
  const [postInformation, setPostInformation] = useState();
  const postUserInfo = () => {
    axios.post(requestURL, postData).then((response) => {
      setPostInformation(response.data);
    });
  };
  return {
    postInformation,
    postUserInfo,
  };
};

export default usePostData;
