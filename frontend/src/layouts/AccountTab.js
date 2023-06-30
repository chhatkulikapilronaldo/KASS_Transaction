import React, { useEffect, useState, useContext } from "react";
import { faEyeSlash, faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { UserDataContext } from "../hooks/UserDataContext";

export const AccountTab = () => {
  const individualAccountInformation = useContext(UserDataContext);
  const [showAmount, setShowAmount] = useState(false);

  const toggleAmount = () => {
    setShowAmount(!showAmount);
  };
  const month = [
    {
      name: "Jan",
    },
    {
      name: "Feb",
    },
    {
      name: "Mar",
    },
    {
      name: "Apr",
    },
    {
      name: "May",
    },
    {
      name: "Jun",
    },
    {
      name: "Jul",
    },
    {
      name: "Aug",
    },
  ];
  // const data = [
  //   {
  //     month: {month}
  //   },
  //   {
  //     name: "Jan",
  //     amt: 2400,
  //   },
  //   {
  //     name: "Feb",

  //     amt: 2210,
  //   },
  //   {
  //     name: "Mar",

  //     amt: 2290,
  //   },
  //   {
  //     name: "April",

  //     amt: 2000,
  //   },
  // ];

  return (
    <div className="account__wrapper">
      <div className="account-text">
        {/* <div className="account-name">
          <i>
            <FontAwesomeIcon icon={faFolderClosed} />
          </i>
          <h5>Global Smart Plus</h5>
        </div> */}

        <p className="holder-name">Account Holder Name: </p>
        <h4>{individualAccountInformation?.Account_Holder}</h4>
        <p className="holder-acc">Account number:</p>
        <h4>{individualAccountInformation?.Account_Number}</h4>
        <p className="holder-balc">Total Amount</p>
        <h4>
          {" "}
          {/* {showAmount ? (
           hideAmount
          ) : null}{" "} */}
          {showAmount ? (
            <>
              <span>
                {individualAccountInformation?.Total_Amount} &nbsp; &nbsp;
                <i>
                  <FontAwesomeIcon icon={faEye} onClick={toggleAmount} />
                </i>
              </span>
            </>
          ) : (
            <>
              <span>XXXXXX &nbsp; &nbsp;</span>
              <i>
                {" "}
                <FontAwesomeIcon onClick={toggleAmount} icon={faEyeSlash} />
              </i>
            </>
          )}
          <i> </i>
        </h4>
      </div>

      <div className="account-graph">
        {/* <div className="account-button">
          <Button name="Last 7 days" />
          <Button name="Last 15 days" />
          <Button name="Last 30 days" />
        </div> */}
        {/* <ResponsiveContainer> */}
        <AreaChart width={500} height={400} data={month}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey={individualAccountInformation?.Total_Amount} />
          <Tooltip />
          {/* <Legend /> */}
          <Area
            type="monotone"
            dataKey={individualAccountInformation?.Total_Amount}
            stroke="#8884d8"
            fill="grey"
          />
        </AreaChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};
