import { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT, LOAD_CONTACT } from './typs'
import contactsReducer from './reducer'
import { axiosPrivateInstance } from '../config/config'
import { formatContact } from '../utils/formatContact'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Auth.Context'
import {toast} from 'react-toastify'


// create context

const ContactContext = new createContext()

const inititalData = [
    {
      id: '1',
      firstname: 'john',
      lastname: 'doe',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://cdn2.iconfinder.com/data/icons/web-hosting-19/50/81-512.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
    {
      id: '2',
      firstname: 'Mike',
      lastname: 'doe',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://mrholmes.dev/img/profile.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
    {
      id: '3',
      firstname: 'Steve',
      lastname: 'Smith',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://static.wixstatic.com/media/1d2a34_e2d1554ad3da45debee667d0aff91edd~mv2.png/v1/fill/w_248,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dummy-man-png-2-1.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
    {
      id: '4',
      firstname: 'john',
      lastname: 'doe',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
    {
      id: '5',
      firstname: 'john',
      lastname: 'doe',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://www.kalashsharma.com/web/boy.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
    {
      id: '6',
      firstname: 'john',
      lastname: 'doe',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/theseg-profile_image-837ceadc6679666a-300x300.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
    {
      id: '7',
      firstname: 'john',
      lastname: 'doe',
      email: 'johndoe@gmail.com',
      profession: 'Web Developer',
      gender: 'male',
      image: 'https://cdn2.iconfinder.com/data/icons/web-hosting-19/50/81-512.png',
      dateOfBirth: '10/11/2000',
      bio: 'All about me'
    },
  ]

// contact reducer function

// provide context

const ContactProvider = ({children}) =>{
    const [contacts, disPatch] = useReducer(contactsReducer, inititalData)
    const [loaded, setLoader] = useState(false)
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const loadAllContacts = async ()=>{
      try{
        const response = await axiosPrivateInstance.get('/contacts')
        const loadedContact = response.data.data.map(contact => formatContact(contact))
        disPatch({
          type: LOAD_CONTACT,
          payload: loadedContact
        })
        setLoader(true)
        // console.log(loadedContact);
      }catch(err){
        console.log(err.response);
      }

    }

    useEffect(()=>{
      (async()=>{
        await loadAllContacts()
      })()
    },[])

    const deleteContact = async (id) => {
      try{
        const response = await axiosPrivateInstance.delete(`contacts/${Number(id)}`)
        disPatch({
          type: DELETE_CONTACT,
          payload: id
        })
        toast.success('Contact Deleted Successfully')
        console.log(response.data)
      }catch(err){
        console.log(err.response);
        toast.error('Data Delete Failed!')
      }
    }
    
      const addContact = async(data) => {
        try{
          data = {
            author: user.id,
            ...data
          }
          const response = await axiosPrivateInstance.post('/contacts',{
            data: data
          })
          const contact = formatContact(response.data.data)
          // toast message 
          toast.success('Delete Successfully')
          //redirect another page
          navigate('/contact')
          disPatch({
            type: ADD_CONTACT,
            payload: contact
          })
          console.log(response.data);
        }catch(err){
          console.log(err.response);
        }
        
      }
    
      const updateContact = async (upContact, id) => {
        try{
          const response = await axiosPrivateInstance.put(`/contacts/${id}?populate=*`,{
            data: upContact
          })
          const contact = formatContact(response.data.data)
          disPatch({type: UPDATE_CONTACT, payload: { id: contact.id, upContact} })
          toast.success('Contact Updated Successfully!!')
        }catch(err){
          console.log(err.response);
          // toast.success(err.response?.data)
        }

      }
      // console.log(contacts);
      const value = {
        loaded,
        contacts,
        deleteContact,
        addContact,
        updateContact
      }


    return <ContactContext.Provider value={value}>
        {children}
    </ContactContext.Provider>
}

export{
    ContactProvider,
    ContactContext
}