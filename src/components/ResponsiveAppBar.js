import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";
import "../App.css";
import Searchbar from "./Searchbar";

function ResponsiveAppBar() {
  return (
    <>
      <Grid stackable>
        <Grid.Row columns={6} className="navigation">
          <Grid.Column width={2} className="LinkContainer">
            <Link to="/">Task</Link>
          </Grid.Column>
          <Grid.Column width={2} className="LinkContainer">
            <Link to="/users">Users</Link>
          </Grid.Column>
          <Grid.Column width={2} className="LinkContainer">
            <Link to="/skills">Skills</Link>
          </Grid.Column>
          <Grid.Column width={2} className="LinkContainer">
            <Link to="/addUser">Add User</Link>
          </Grid.Column>
          <Grid.Column width={2} className="LinkContainer">
            <Link to="/booked">
              <Button basic color="green">
                BOOKED
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column width={5} floated="right">
            <Searchbar></Searchbar>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default ResponsiveAppBar;
