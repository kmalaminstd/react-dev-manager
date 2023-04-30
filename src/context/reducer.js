import { ADD_CONTACT, DELETE_CONTACT, LOAD_CONTACT, UPDATE_CONTACT } from "./typs"

const contactsReducer = (state, action)=>{

    const {type, payload} = action
    // console.log(payload);
    switch(type){
      case LOAD_CONTACT:
        return [...payload]
      case DELETE_CONTACT:
        const updateInitialData = state.filter(cont => cont.id !== action.payload)
        return [...updateInitialData]
      case ADD_CONTACT:
          const contactToAdd ={
            ...payload
          }
        return [ contactToAdd, ...state]
      case UPDATE_CONTACT:
          const {id, upContact} = payload
          // console.log(contact);
          const contactUpdated = state.map( cont => {
            if(cont.id === id){
              return{ 
                id,
                ...upContact
              }
            }else{
              return cont
            }
          })
        return [...contactUpdated]
      default:
        return state
    }
  
}

export default contactsReducer
  