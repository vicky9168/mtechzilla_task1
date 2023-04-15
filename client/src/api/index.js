import axios from 'axios'

const API=axios.create({baseURL:'https://mtechzilltask1.onrender.com'})

export const signUp=(authData)=> API.post('/user/signup',authData);
export const logIn=(authData)=> API.post('/user/login',authData);

