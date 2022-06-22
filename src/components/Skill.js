import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import SkillsApi from "../api/skillsApi";

function Skill(props) {
  const { deleteSkill } = SkillsApi();

  return (
    <>
      <Segment color="green">
        <Grid columns={3} textAlign="right" stackable>
          <Grid.Row>
            <Grid.Column width={2} textAlign="left" floated="center">
              <img
                src={props.image}
                style={{ width: "60%", margin: "0 auto" }}
              ></img>
            </Grid.Column>
            <Grid.Column
              width={11}
              textAlign="left"
              verticalAlign="middle"
              style={{ fontSize: "1.5em" }}
            >
              {props.name}
            </Grid.Column>

            <Grid.Column width={3} verticalAlign="middle">
              <Icon
                name="trash alternate outline"
                bordered
                onClick={() => deleteSkill(props.id)}
              ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default Skill;
