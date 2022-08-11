import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { theme } from 'theme';

import Container from './common/Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <h1 className={styles.title} >
            Phonebook
          </h1>
          <ContactForm />
          <h2 className={ styles.title } >
            Contacts
          </h2>
          <Filter />
          <ContactList />
        </Container>
        <ToastContainer />
      </ThemeProvider>
    );
};
