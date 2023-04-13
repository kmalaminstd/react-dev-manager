import { createContext, useState } from 'react'

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

// provide context

const ContactProvider = ({children}) =>{
    const [contacts, setContacts] = useState(inititalData)

    const deleteContact = (id) => {
        const updateInitialData = contacts.filter(cont => cont.id !== id)
        setContacts(updateInitialData)
      }
    
      const addContact = (data) => {
        const contactToAdd ={
          id: contacts.length+1 ,
          ...data
        }
        setContacts([ contactToAdd, ...contacts])
        
      }
    
      const updateContact = (upContact, id) => {
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
    
        setContacts(contactUpdated)
    
      }

      const value = {
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