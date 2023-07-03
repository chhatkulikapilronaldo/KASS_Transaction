import React, { useState } from "react";
import axios from "axios";

const useGetData = (requestURL) => {
  const token = localStorage.getItem("userToken");
  const [getInformation, setGetInformation] = useState();
  const getUserInfo = async () => {
    try {
      await axios
        .get(requestURL, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          setGetInformation(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    getInformation,
    getUserInfo,
  };
};

export default useGetData;
