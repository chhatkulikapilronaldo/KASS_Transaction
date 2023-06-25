// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
// import changePassword from "../assets/images/changePassword.jpg";
// import { InputField } from "./InputField";
// import { faLock } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "./Button";
// export const Modal = ({
//   transType,
//   oldData,
//   oldDataLabel,
//   newData,
//   confirmData,
//   icon,
//   modalImage,
// }) => {
//   return (
//     <div className="modal">
//       <div className="modal__wrapper">
//         <div className="modal-clear">
//           <FontAwesomeIcon icon={faClose} />
//         </div>
//         <div className="modal-form">
//           <div className="form-image">
//             <img src={modalImage} alt="change" />
//           </div>
//           <div className="form">
//             <h3>{transType}</h3>
//             <form>
//               <InputField
//                 type="text"
//                 name={oldData}
//                 label={oldDataLabel}
//                 icon={icon}
//               />
//               <InputField
//                 type="text"
//                 name={oldData}
//                 label={oldDataLabel}
//                 icon={icon}
//               />
//               <InputField
//                 type="text"
//                 name={oldData}
//                 label={oldDataLabel}
//                 icon={icon}
//               />
//               <Button className="modal-button" type="Submit" name="Confirm" />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { InputField } from "./InputField";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import useFormHandling from "../hooks/useFormHandling";
import usePostData from "../hooks/usePostData";
const kapil_PinUpdate_url = "http://10.7.1.13:8080/users/update";
export const Modal = ({
  transType,
  oldData,
  oldDataLabel,
  newData,
  confirmData,
  icon,
  modalImage,
  displayState,
}) => {
  const [inType, setInType] = useState("text");
  const handleModalClose = () => {
    displayState(true);
  };
  useEffect(() => {
    if (transType === "Change Password") {
      setInType("text");
    } else if (transType === "Change PIN") {
      setInType("number");
    } else {
      setInType("text");
    }
  }, [transType]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal-clear">
          <FontAwesomeIcon icon={faClose} onClick={handleModalClose} />
        </div>
        <div className="modal-form">
          <div className="form-image">
            <img src={modalImage} alt="change" />
          </div>
          <div className="form">
            <h3>{transType}</h3>
            <form onSubmit={handleSubmit}>
              <InputField
                type={inType}
                name={oldData}
                label={oldDataLabel}
                icon={icon}
                // handleInput={handleFormInput}
              />
              <InputField
                type={inType}
                name={newData}
                label={newData}
                icon={icon}
                // handleInput={handleFormInput}
              />
              <InputField
                type={inType}
                name={confirmData}
                label={confirmData}
                icon={icon}
                // handleInput={handleFormInput}
              />
              <Button className="modal-button" type="Submit" name="Confirm" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
