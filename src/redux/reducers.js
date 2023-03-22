import { 
  GET_ALL_COURSES, 
  GET_ALL_POSTS, 
  GET_ALL_SPECIALITIES, 
  GET_ALL_TEACHERS, 
  GET_COURSE, 
  GET_FRAGMENT, 
  GET_POST, 
  GET_SPECIALITY } from "./actions";

export const postReducer=(state={},action)=>{
  switch(action.type){
    case GET_ALL_POSTS:
      return {
        ...state,
        posts:action.posts
      }
    case GET_POST:
      return{
        ...state,
        post: action.post
      }
    default :
      return state;
  }
  // return state;
}
export const specialityReducer=(state={},action)=>{
  switch(action.type){
    case GET_ALL_SPECIALITIES:
      return {
        ...state,
        specialities:action.specialities
      }
    case GET_SPECIALITY:
      return{
        ...state,
        speciality: action.speciality
      }
    default :
      return state;
  }
 
}
export const courseReducer=(state={},action)=>{
  switch(action.type){
    case GET_ALL_COURSES:
      return {
        ...state,
        courses:action.courses
      }
    case GET_COURSE:
      return{
        ...state,
        course: action.course
      }
    default :
      return state;
  }
  
}
export const teacherReducer=(state={},action)=>{
  switch(action.type){
    case GET_ALL_TEACHERS:
      return {
        ...state,
       teachers:action.teachers 
      }

    
    default :
      return state;
  }
  
}
export const fragmentReducer=(state={},action)=>{
  switch(action.type){
  
    case GET_FRAGMENT:
      return{
        ...state,
        fragment: action.fragment
      }
    default :
      return state;
  }
 
}

