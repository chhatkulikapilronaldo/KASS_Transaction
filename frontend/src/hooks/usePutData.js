import { useState } from "react";
import axios from "axios";

const usePutData = (requestURL, putData) => {
  const [putInformation, setputInformation] = useState();
  const updateUserPassword = async () => {
    try {
      await axios
        .put(requestURL, putData, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6Ijk4NjEzMzQ1NjcifSwiaWF0IjoxNjg3NjgzNDM0LCJleHAiOjE2ODg4OTMwMzR9.WLQSMdwYVyxB69SEqSNVcGBOtV2qbxh1KPbWXf51PcA",
          },
        })
        .then((response) => {
          setputInformation(response.data);
        });
    } catch (error) {
      // setputInformation(error.response.data.Message);
      if (error.status === 400) {
        setputInformation(error);
      } else {
        setputInformation(error.response.data.Message);
      }
    }
  };
  return {
    putInformation,
    updateUserPassword,
  };
};

export default usePutData;
