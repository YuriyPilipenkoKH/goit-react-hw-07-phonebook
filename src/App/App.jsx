import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import  ContactForm  from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { iconMphone,  iconGypsy } from 'utils/svgIcons';
// import { useSelector } from 'react-redux';
// import { getContactsList } from 'redux/selectors';



const App = () => {
// const contacts = useSelector(getContactsList)

    // useEffect(() => {
    //   console.log('ContactList-dispatch');
  
    //   dispatch(fetchContacts())
   
    // }, [dispatch])

  
  return (
  
    <Container>
      <Section title="Phonebook" icon ={iconMphone}>
        <ContactForm  />
      </Section>

      <Section title="Contacts" icon = {iconGypsy}>
        <Filter />
        {/* {contacts.length > 0 && (
          <ContactList  />
        )} */}
        <ContactList  />
      </Section>
    </Container>

  );
};

export default App;
