import { FaPhone, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/contactsSlice";
export default function Contact({ contact, deleteHandler }) {
  const loading = useSelector(selectLoading);
  function onDeleteClick(e, contact) {
    deleteHandler(contact.id);
  }

  return (
    <>
      <div>
        <FaUser /> {contact.name}
      </div>
      <div>
        <FaPhone /> {contact.number}
      </div>
      <button
        type="button"
        disabled={loading}
        onClick={(e) => onDeleteClick(e, contact)}
      >
        Delete
      </button>
    </>
  );
}
