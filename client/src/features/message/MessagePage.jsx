import { useState } from "react";
import { useSelector } from "react-redux";
import { useSetMessageStatusMutation, useDeleteMessageMutation, selectAllMessages } from "./messageSlice";

import { FaTrash, FaTimes, FaExclamationCircle } from "react-icons/fa";

function MessagePage() {

  const [setMessageStatus] = useSetMessageStatusMutation();

  const [deleteMessage] = useDeleteMessageMutation();

  const [errorMsg, setErrorMsg] = useState(null);

  const messages = useSelector(selectAllMessages);

  console.log(messages);

  const handleSetReplied = async (e) => {
    e.preventDefault();

    try{
      await setMessageStatus({
        replied: e.currentTarget.dataset.replied, 
        id: e.currentTarget.dataset.id
      }).unwrap();
    }
    catch(e) {
      console.error(e);
      if(!Number(e.status)) setErrorMsg("No server response");
      else setErrorMsg(e.data.error);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.messageid;
    try{
      await deleteMessage(id);
    }
    catch(e) {
      console.error(e);
    }
  }

  const handleDismiss = (e) => {
    e.preventDefault();
    setErrorMsg(null);
  }

  const MessageCard = ({message}) => (
    <article className="border mb-5 px-5 py-2" >
        <header className="text-2xl border-b-2 flex justify-between items-center pb-1">
          <h2>{`From: ${message.name}${message.replied ? " - Replied" : ""}`}</h2>
          <div className="flex items-center justify-between gap-3" >
            <button 
            className="border-2 rounded-md text-lg p-1"
            type="button" 
            onClick={handleSetReplied} 
            data-id={message._id} 
            data-replied={message.replied} 
            >{message.replied ? "Mark Unreplied" : "Mark Replied"}</button>
            <FaTrash data-messageid={message._id} onClick={handleDelete} />
          </div>
        </header>
        <p
        className="text-xl mb-2"
        >{message.email}</p>
        <p
        className="text-xl"
        >{message.content}</p>
    </article>
  )

  return (
    <div>
        <h1
        className="text-4xl border-b-black border-b-2 mb-5 p-4"
        >Messages</h1>

        {
          errorMsg !== null ?
            <section className='flex justify-between items-center p-1 mb-5 border border-white' >
              <p className="flex items-center gap-1" ><FaExclamationCircle color="rgb(239 68 68)" />{errorMsg}</p>
              <button type='button' onClick={handleDismiss}><FaTimes/></button>
            </section>
          : undefined
        } 

        <section className="pb-5" >
            {messages.length ?
              messages.map(x => <MessageCard key={x._id} message={x}/>)
              :
              <h2>No messages</h2>
            }
            
        </section>
    </div>
  )
}

export default MessagePage