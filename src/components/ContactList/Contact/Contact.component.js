import PropTypes from 'prop-types';
import Button from 'components/common/Button';
import { ContactCard, Name, Phone } from './Contact.styled';
import { useDeleteContactMutation } from 'services/contactsApi';
import { notificationService } from 'services/notificationService';

const messages = {
    onSuccess: 'Contact was successfuly removed',
    onError: 'Ups... looks like an erorr. Please, try again'
}

const Contact = ({ id, name, number }) => {
    const [ deleteContact, isSuccess, isError, isLoading ] = useDeleteContactMutation();
    const handleContactDeleting = (contactId) => {
        deleteContact(contactId);
        notificationService(isSuccess, isError, messages);
    }

    return (
        <ContactCard>
            <div>
                <Name>
                    {name}
                </Name>
                <Phone>
                    {number}
                </Phone>
            </div>
            <Button
                onClick={() => handleContactDeleting(id)}
                disabled={isLoading}
            >
                &#9587;
            </Button>
        </ContactCard>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}

export default Contact;