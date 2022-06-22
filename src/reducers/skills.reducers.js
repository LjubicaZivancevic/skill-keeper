import { createReducer } from "@reduxjs/toolkit";
import {
  addSkill,
  defaultSort,
  deleteSkillRedux,
  doSearch,
  setSkills,
  sortByName,
} from "../actions/skills.actions";

const initialState = {
  skills: [],
  searchTerm: null,
  sortTerm: null,
};

const skillReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addSkill, (state, action) => {
      state.skills.push(action.payload);
    })
    .addCase(setSkills, (state, action) => {
      /*action.payload.map((skill) => {
        state.skills.push(skill)
      } 
      )*/
      state.skills = action.payload;
    })
    .addCase(deleteSkillRedux, (state, action) => {
      state.skills.filter((skill) => skill.id !== action.payload);
    })
    .addCase(doSearch, (state, action) => {
      return { ...state, searchTerm: action.payload };
    })
    .addCase(sortByName, (state) => {
      return { ...state, sortTerm: "name" };
    })
    .addCase(defaultSort, (state) => {
      return { ...state, sortTerm: "default" };
    });
});

/*
const skillReducer = (state = initialState, action) => { 


  switch (action.type) {
    case skillsTypes.SET_SKILLS:
      return { ...state, skills: action.payload };
      break;
    case skillsTypes.POPULATE_SKILLS:
      return { ...state, skills: action.payload };
    case skillsTypes.ADD_SKILL:   
      return { ...state, skills: [...state.skills, action.payload] };
      break;
   
    default:
      return state;
  }
};
*/
export default skillReducer;
