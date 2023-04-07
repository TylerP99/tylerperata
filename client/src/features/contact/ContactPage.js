import { useSelector } from "react-redux";
import { selectAllContacts } from "./contactSlice";

function ContactPage() {

  const contacts = useSelector(selectAllContacts);

  console.log(contacts);

  const ContactCard = ({contact}) => (
    <article>
        <h2>{`From: ${contact.name}`}</h2>
        <p>{contact.email}</p>
        <p>{contact.message}</p>
    </article>
  )

  return (
    <div>
        <h1>Messages</h1>
        <section>
            {contacts.map(x => <ContactCard key={x._id} contact={x}/>)}
        </section>
    </div>
  )
}

export default ContactPage