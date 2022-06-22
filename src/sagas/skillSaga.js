import React from 'react';
import {setSkills, addSkill} from '../actions/skills.actions';
import axios from 'axios';
import {delay, take, put, call} from 'redux-saga/effects';
import { useDispatch } from "react-redux";


export function* skillSaga() {
    const apiURL = "https://6195285474c1bd00176c6be7.mockapi.io/skills";
   
  
        yield take(setSkills.toString());

        const result = yield call(axios, apiURL)
        console.log('Res', result)
        yield put(setSkills)
     
    
}

