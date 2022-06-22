import React from "react";
import { Container, Grid } from "semantic-ui-react";
import UserForm from "../components/UserForm";


function AddUser() {
  return (
    <>
      <Container >
        <Grid verticalAlign='middle' >
          <Grid.Row>
            <Grid.Column>
              <UserForm></UserForm>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default AddUser;
