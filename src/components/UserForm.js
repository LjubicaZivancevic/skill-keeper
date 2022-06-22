import React, { useEffect, useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "../App.css";
import { useSelector } from "react-redux";
import { MultiSelect } from "react-multi-select-component";
import UsersApi from "../api/usersApi";

function UserForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [location, setLocation] = useState("");
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);

  const { addUserData } = UsersApi();
 

  
  useEffect(() => {
    getOptions();
 
  }, []);


  function formatDate(date) {
    console.log(date);
    return new Date(date).toLocaleDateString("en-UK");
  }
  const onChange = (event, data) => setDateOfBirth(data.value);
  const skillsSelector = useSelector((state) => state.skills.skills);

  function getOptions() {
    const optionsFormat = [];

    skillsSelector.map((skill) => {
      optionsFormat.push({
        label: skill.name,
        value: skill.id,
      });
    });

    setOptions(optionsFormat);
  }
  


  
  const collectUserData = () => {
    const formatSelectedValues = selected.map((el) => el.label);

    const userData = {
      name,
      image,
      location,
      dateOfBirth: formatDate(dateOfBirth),
      skills: formatSelectedValues,
    };
    addUserData(userData);
    console.log(userData);
  };

  return (
    <>
      <Grid verticalAlign="middle" className="userForm">
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Image URL</label>
                <input
                  placeholder="Image URL"
                  onChange={(event) => setImage(event.target.value)}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Date of Birth</label>

                <SemanticDatepicker
                  locale="en-US"
                  type="basic"
                  onChange={onChange}
                  style={{ width: "100%" }}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Location</label>
                <input
                  placeholder="Location"
                  onChange={(event) => setLocation(event.target.value)}
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
                <label>Skills</label>
                <MultiSelect
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered verticalAlign="middle">
          <Grid.Column width={8}>
            <Button color="green" onClick={collectUserData}>
              Submit
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default UserForm;
