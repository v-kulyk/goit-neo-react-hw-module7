import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const onDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const contactElements = filteredContacts.map((contact) => (
    <li className={styles.item} key={contact.id}>
      <Contact contact={contact} deleteHandler={onDelete} />
    </li>
  ));

  return <ul className={styles.list}>{contactElements}</ul>;
}
