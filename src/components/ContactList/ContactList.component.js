import { ListItem, ListOfContacts } from './ContactList.styled';
import { useGetAllContactsQuery } from 'services/contactsApi';
import { useSelector } from 'react-redux';
import { filterSelectors } from 'redux/filter/filter.selectors';
import Contact from './Contact';
import Empty from '../Empty';
import Loader from 'components/common/Loader';

const ContactList = () => {
    const { data , error, isLoading  } = useGetAllContactsQuery();
    const filter = useSelector(filterSelectors.getFilter);
    
    const hasData = data?.length && !error;
    const showLoader = !hasData && !isLoading ;
    
    const filteredContacts = hasData ? data.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase())) : [];
    const contactList = filteredContacts.length ? filteredContacts : data;

    return (
        <>
            {isLoading  && <Loader type="dual-rings"/>}
            {hasData ? <ListOfContacts>
                            {contactList.map(({ id, name, phone }) => (
                                    <ListItem key={id}>
                                        <Contact
                                            id={id}
                                            name={name}
                                            number={phone}
                                        />
                                    </ListItem>
                                ))}
                        </ListOfContacts>
                    : null
            }
            {showLoader ? <Empty message="Your phonebook is empty..."/> : null}
        </>
    );
}

export default ContactList;