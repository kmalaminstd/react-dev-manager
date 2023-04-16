const contactsReducer = (state, action)=>{

    const {type, payload} = action
    switch(type){
      case DELETE_CONTACT:
        const updateInitialData = state.filter(cont => cont.id !== action.payload)
        return [...updateInitialData]
      case ADD_CONTACT:
          const contactToAdd ={
            id: contacts.length+1 ,
            ...data
          }
        return [ contactToAdd, ...state]
      case UPDATE_CONTACT:
          const contactUpdated = contacts.map( cont => {
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
  