import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Segment } from "semantic-ui-react";
import { defaultSort, sortByName } from "../actions/skills.actions";
import Skill from "./Skill";
function TestReduxacsSKills() {
  const [isSortApplied, setIsSortApplied] = useState(false);
  const dispatch = useDispatch();

  const skillsSelector = useSelector((state) => {
  
    const sortedSkills = [...state.skills.skills];
    if (state.skills.searchTerm !== "" && state.skills.searchTerm !== null) {
      console.log(state.skills.searchTerm);
      
      return state.skills.skills.filter((skill) =>
        skill.name.toLowerCase().includes(state.skills.searchTerm)
      );
    } else if (state.skills.sortTerm === "name") {
      return sortedSkills.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.skills.sortTerm === "default") {
      return state.skills.skills;
    } else {
      return state.skills.skills;
    }
  });

  function sortButtonHandler() {
    if (isSortApplied) {
      dispatch(defaultSort("default"));
      setIsSortApplied(false);
    } else {
      dispatch(sortByName("name"));
      setIsSortApplied(true);
    }
  }
  return (
    <>
      <Container>
        {isSortApplied ? (
          <Button inverted color="pink" onClick={() => sortButtonHandler()}>
            Default sort
          </Button>
        ) : (
          <Button inverted color="green" onClick={() => sortButtonHandler()}>
            Sort by name
          </Button>
        )}

        {skillsSelector
          ? skillsSelector.map((currentSkill) => (
              <Skill
                key={currentSkill.id}
                name={currentSkill.name}
                image={currentSkill.image}
                id={currentSkill.id}
              ></Skill>
            ))
          : console.log("Nothing")}
      </Container>
    </>
  );
}

export default TestReduxacsSKills;
