import React, { useEffect, useState } from "react";

import skillsApi from "../api/skillsApi";

import EntryForm from "../components/EntryForm";
import TestReduxacsSKills from "../components/TestReduxacsSKills";
import { Container, Grid } from "semantic-ui-react";

function Skills() {
  const { getDataAX } = skillsApi();

  /* useEffect(() => {
    getData().then((response) => setSkills(response.data));
  }, []);
  */

  useEffect(() => {
    getDataAX();
  }, []);

  //   useEffect(() => {
  //     axios
  //       .get("https://6195285474c1bd00176c6be7.mockapi.io/skills")
  //       .then((response) => setSkills(response.data))
  //   }, [skills]);

  return (
    <>
      <Container>
        <Grid>
          <Grid.Row>
            <EntryForm></EntryForm>
          </Grid.Row>
          <Grid.Row>
            <TestReduxacsSKills></TestReduxacsSKills>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default Skills;
