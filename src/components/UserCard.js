import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Image, Icon, Label, Button } from "semantic-ui-react";
import { removeFromBookingList } from "../actions/booking.actions";
import UsersApi from "../api/usersApi";
import ModalBookingForm from "./ModalBookingForm";

function UserCard(props) {
  const { removeUser } = UsersApi();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <Card
        style={{
          display: "inline-block",
          margin: "0 auto",
          width: "22%",
          margin: "20px",
        }}
        j
      >
        <div style={{ height: "250px", width: "100%", overflow: "hidden" }}>
          <Image
            src={props.image}
            size="mini"
            style={{ height: "auto", width: "100%", objectFit: "contain" }}
          />
        </div>

        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>
            Date of birth: <b> {props.dateOfBirth}</b>
          </Card.Meta>
          <Card.Meta>
            Location: <b>{props.location}</b>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Meta>Skills</Card.Meta>
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
        </Card.Content>

        {props.booked && (
          <Card.Content extra>
            <Card.Meta>
              You have booked this developer for : <b> {props.date}</b>
            </Card.Meta>
          </Card.Content>
        )}
        {props.booked ? 
          <Card.Content extra>
            <Card.Meta>
              <Button
                basic
                color="red"
                onClick={() => 
                  dispatch(removeFromBookingList(props.id))
                }
              >
                DECLINE DEVELOPER
              </Button>
            </Card.Meta>
          </Card.Content>
         : (
          <Card.Content extra>
            <Card.Meta>
              <Button
                basic
                color="blue"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                BOOK DEVELOPER
              </Button>
            </Card.Meta>
          </Card.Content>
        )}

        {props.booked ? (
          <></>
        ) : (
          <Card.Content extra textAlign="right">
            <Icon name="edit outline" bordered></Icon>
            <Icon
              name="trash alternate outline"
              bordered
              onClick={() => removeUser(props.id)}
            ></Icon>
          </Card.Content>
        )}
      </Card>

      <ModalBookingForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        {...props}
      ></ModalBookingForm>
    </>
  );
}

export default UserCard;
