import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const contactElements = filteredContacts.map((contact) => (
    <li className={styles.item} key={contact.id}>
      <Contact contact={contact} deleteHandler={onDelete} />
    </li>
  ));

  if (loading && filteredContacts.length === 0) {
    return <p>Loading...</p>;
  }

  return <ul className={styles.list}>{contactElements}</ul>;
}
