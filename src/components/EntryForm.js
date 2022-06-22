import React, { useState } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import SkillsApi from "../api/skillsApi";

function EntryForm() {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const { addSkills } = SkillsApi();

  function formValidation(data) {
    if (image === "" || name === "") {
        alert("Please fill in all fileds");
    } else {
     
      setName("");
      setImage("");
      addSkills(data);
      console.log(data);
    }
  }
  return (
    <Grid stackable padded>
      <Grid.Row columns={3}>
        <Grid.Column width={6}>
          <Form.Group>
            <Form.Input
              placeholder="Skill name"
              width={16}
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></Form.Input>
          </Form.Group>
        </Grid.Column>
        <Grid.Column width={6}>
          <Form.Input
            placeholder="Image URL"
            width={16}
            value={image}
            onChange={(event) => setImage(event.target.value)}
          ></Form.Input>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button color="green" onClick={() => formValidation({ name, image })}>
            Add skill
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EntryForm;
