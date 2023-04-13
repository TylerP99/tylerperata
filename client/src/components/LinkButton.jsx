import React from 'react'

function LinkButton({text, link, className=""}) {
  return (
    <a
    className={"border-2 py-2 block text-center hover:bg-black/20" + " " + className}
    href={link}
    target="_blank"
    rel='noreferrer'
    >{text}</a>
  )
}

export default LinkButton