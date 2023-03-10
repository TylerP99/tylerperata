import React from 'react'

function Comment({text="", author="Unknown"}) {
  return (
    <div>
        <p>{author}</p>
        <p>{text}</p>
    </div>
  )
}

export default Comment