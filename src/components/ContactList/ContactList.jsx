import { List,  ContactContainer } from './ContactList.styled';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getContactsList , getContactsFilter} from 'redux/selectors';


export const ContactList = () => {

  const contacts = useSelector(getContactsList)
  const filterValue = useSelector(getContactsFilter)

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

