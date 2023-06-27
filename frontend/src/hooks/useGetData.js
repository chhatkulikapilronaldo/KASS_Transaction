import React, { useState } from "react";
import axios from "axios";

const useGetData = (requestURL) => {
  const token = localStorage.getItem("userToken");
  console.log(token);
  const [getInformation, setGetInformation] = useState();
  const getUserInfo = async () => {
    try {
      await axios
        .get(requestURL, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6Ijk4NzY1NTY3MzEifSwiaWF0IjoxNjg3ODYwNjg1LCJleHAiOjE2ODkwNzAyODV9.bHg1TqzBxxDouwIChLGj58Bs5JWNFWuhJEwPCoKCwAg",
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
