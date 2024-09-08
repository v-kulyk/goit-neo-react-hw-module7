import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectError } from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Oops! Something went wrong: {error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
