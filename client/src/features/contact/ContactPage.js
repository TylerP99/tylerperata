import { useSelector, useDispatch } from "react-redux";
import { selectAllContacts, setContactReplied, deleteContact } from "./contactSlice";

import { FaTrash } from "react-icons/fa";

function ContactPage() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);

  console.log(contacts);

  const handleSetReplied = (e) => {
    e.preventDefault();

    dispatch(setContactReplied({replied: !(e.currentTarget.dataset.replied === "true" ? true : false), id: e.currentTarget.dataset.id}));
  }

  const handleDelete = (e) => {
    e.preventDefault();

    const id = e.currentTarget.dataset.messageid;

    dispatch(deleteContact(id));
  }

  const ContactCard = ({contact}) => (
    <article className="border mb-5 px-5 py-2" >
        <header className="text-2xl border-b-2 flex justify-between items-center">
          <h2>{`From: ${contact.name}${contact.replied ? " - Replied" : ""}`}</h2>
          <div className="flex items-center justify-between gap-3" >
            <button 
            className="border-2 rounded-md text-lg"
            type="button" 
            onClick={handleSetReplied} 
            data-id={contact._id} 
            data-replied={contact.replied} 
            >{contact.replied ? "Mark Unreplied" : "Mark Replied"}</button>
            <FaTrash data-messageid={contact._id} onClick={handleDelete} />
          </div>
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
            {contacts.length ?
              contacts.map(x => <ContactCard key={x._id} contact={x}/>)
              :
              <h2>No messages</h2>
            }
            
        </section>
    </div>
  )
}

export default ContactPage