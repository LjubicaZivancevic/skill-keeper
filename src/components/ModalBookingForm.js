import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Button, Label } from "semantic-ui-react";
import { bookUser } from "../actions/booking.actions";
import "../App";

function ModalBookingForm(props) {
  const [date, setDate] = useState();
  const onChange = (event, data) => setDate(data.value);
  

  const dispatch = useDispatch();

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-UK");
  }

  function submitBooking() {
    const userData = {
      id: props.id,
      date: formatDate(date),
    };
    console.log("Logggg", userData.date);

    if (userData.date !== "Invalid Date") {
      dispatch(bookUser(userData));
      const modalContent = document.querySelector(".modal-content-info");
      modalContent.innerHTML = `<h3>You successfully booked ${props.name} for ${userData.date}</h3>`;
    }
  }

  return (
    <>
      {props.isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => props.setIsOpen(false)}>
              &times;
            </button>
            <div className="modal-content-info">
              <p>Are you sure you want to book this developer?</p>
              <div>
                <p>
                  Name: <b>{props.name}</b>
                </p>
                <p>
                  Date of birth: <b>{props.dateOfBirth}</b>
                </p>
                <p>
                  Location: <b>{props.location}</b>
                </p>
                <div>Skills</div>
                <div>
                  {props.skills.map((skill) => (
                    <Label
                      key={skill}
                      as="a"
                      image
                      color="green"
                      style={{ marginTop: "10px" }}
                    >
                      {skill}
                    </Label>
                  ))}
                </div>
                <br></br>

                <p>Please select desired day</p>
                <SemanticDatepicker
                  locale="en-US"
                  type="basic"
                  onChange={onChange}
                  style={{ width: "100%" }}
                />
                <Button.Group floated="right">
                  <Button onClick={() => props.setIsOpen(false)}>Cancel</Button>
                  <Button.Or />
                  <Button positive onClick={submitBooking}>
                    Save
                  </Button>
                </Button.Group>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalBookingForm;
