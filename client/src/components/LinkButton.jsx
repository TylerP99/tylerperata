import React from 'react'

import {Link} from "react-router-dom";

function LinkButton({text, link}) {
  return (
    <a
    className="border-2 py-2 w-full block text-center hover:bg-white/20"
    href={link}
    target="_blank"
    >{text}</a>
  )
}

export default LinkButton