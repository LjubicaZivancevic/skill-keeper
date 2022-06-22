import { createAction } from "@reduxjs/toolkit";

export const addSkill = createAction('addSkill')
export const setSkills = createAction('setSkills')
export const deleteSkillRedux = createAction('deleteSkillRedux')
export const doSearch = createAction('doSearch')
export const sortByName = createAction('sortByName')
export const defaultSort = createAction('defaultSort')


/*const types = {
    SET_SKILLS: "SET_SKILLS",
    POPULATE_SKILLS: "POPULATE_SKILLS",
    ADD_SKILL: "ADD_SKILL"
    
  };

  export default types;

  export const populateSkills = (skills) => {
    return { type: types.POPULATE_SKILLS, payload: skills };
  };

  export const setSkills = (skills) => {
      return {type: types.SET_SKILLS, payload: skills }
  }

  export const addSkill = (payload) => {
    return { type: types.ADD_SKILL, payload };
  };
*/