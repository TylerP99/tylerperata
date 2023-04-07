import { useSelector, useDispatch } from "react-redux";
import { selectAllContacts, deleteContact } from "./contactSlice";

import { FaTrash } from "react-icons/fa";

function ContactPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);

  const handleDelete = (e) => {
    e.preventDefault();

    const id = e.currentTarget.dataset.messageid;

    dispatch(deleteContact(id));
  }

  const ContactCard = ({contact}) => (
    <article className="border mb-5 px-5 py-2" >
        <header className="text-2xl border-b-2 flex justify-between items-center">
          <h2>{`From: ${contact.name}`}</h2>
          <FaTrash data-messageid={contact._id} onClick={handleDelete} />
        </header>
        <p
        className="text-xl mb-2"
        >{contact.email}</p>
        <p
        className="text-xl"
        >{contact.message}</p>
    </article>
  )

  return (
    <div>
        <h1
        className="text-4xl border-b-black border-b-2 mb-5 p-4"
        >Messages</h1>
        <section className="pb-5" >
            {contacts.map(x => <ContactCard key={x._id} contact={x}/>)}
        </section>
    </div>
  )
}

export default ContactPage