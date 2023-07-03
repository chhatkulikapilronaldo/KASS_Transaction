import { useEffect, useState } from "react";
import axios from "axios";

const usePutData = (requestURL, putData) => {
  const [putInformation, setputInformation] = useState();
  const token = localStorage.getItem("userToken");
  const updateUserInformation = async () => {
    try {
      await axios
        .put(requestURL, putData, {
          headers: {
            Authorization: token,
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
    updateUserInformation,
  };
};

export default usePutData;
