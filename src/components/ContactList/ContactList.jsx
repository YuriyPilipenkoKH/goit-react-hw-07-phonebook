import { List,  ContactContainer } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';


export const ContactList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('ContactList-dispatch');

    dispatch(fetchContacts())
    // .then(data => {
    //   console.log(data.payload)
    //   const list = data.payload
    //   return list
    // })

 
  }, [dispatch] )

  // fetchContacts()

  const contacts = useSelector(state => state.contacts.contactsList)
  const filterValue = useSelector(state => state.filter)
  // console.log(filterValue);

  const filteredContacts = [...contacts.filter((contact )=>
     contact.name.toLowerCase().includes(filterValue.filter) || contact.number.includes(filterValue.filter) )]




  return (
    contacts.length !== 0 && (
      <ContactContainer>
        <List>
          {filteredContacts.map((contact) => {
           

            return (
            <ContactListItem 
            key={contact.id}
            contact = {contact}

            ></ContactListItem>
            );
          })}
        </List>
      </ContactContainer>
    )
  );
};

