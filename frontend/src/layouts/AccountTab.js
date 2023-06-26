import React, { useState } from "react";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Button } from "../components/Button";
import { faEye } from "@fortawesome/free-solid-svg-icons";
export const AccountTab = () => {
  const [showAmount, setShowAmount] = useState(false);


  const toggleAmount = () => {
    setShowAmount(!showAmount);
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
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
        <h4>Max Waltson</h4>
        <p className="holder-acc">Account number:</p>
        <h4>12452113252452</h4>
        <p className="holder-balc">Total Amount</p>
        <h4>
          {" "}
          {/* {showAmount ? (
           hideAmount
          ) : null}{" "} */}
          {showAmount ? <span>120000 &nbsp; &nbsp;</span> : <span>XXXXXX  &nbsp; &nbsp;</span>}
         <i> <FontAwesomeIcon onClick={toggleAmount} icon={faEye} /></i>
        </h4>
      </div>

      <div className="account-graph">
        {/* <div className="account-button">
          <Button name="Last 7 days" />
          <Button name="Last 15 days" />
          <Button name="Last 30 days" />
        </div> */}
        {/* <ResponsiveContainer> */}
        <AreaChart width={500} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#222222" />
        </AreaChart>
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};