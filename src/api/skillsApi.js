import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setSkills,
  addSkill,
  deleteSkillRedux,
} from "../actions/skills.actions";

function SkillsApi() {
  const apiURL = "https://6195285474c1bd00176c6be7.mockapi.io/skills";
  const dispatch = useDispatch();

  const getDataAX = async () => {
    try {
      const response = await axios
        .get(apiURL)
        .then((response) => dispatch(setSkills(response.data)));
      console.log("Axios", response);
      return response;
    } catch (err) {
      console.log(err);
    }
  };

  /* const getData = async () => {
    try {
      fetch(apiURL).then((response) =>
        response.json().then((skills) => dispatch(setSkills(skills)))
      );
    } catch (err) {
      console.log(err);
    }
  };
  */

  const addSkills = async (skillData) => {
    try {
      const response = axios
        .post(apiURL, skillData)
        .then((response) => { console.log(response); dispatch(addSkill(response));  getDataAX();});
      console.log("SKill added", response);
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  const deleteSkill = async (id) => {
    console.log("ID from axios", id);
    axios
      .delete(`${apiURL}/${id}`)
      .then((response) => {
        dispatch(deleteSkillRedux(response.data));
        getDataAX();
      })
      .catch((err) => console.log(err));
  };

  return {
    getDataAX,
    addSkills,
    deleteSkill,
  };
}

export default SkillsApi;
