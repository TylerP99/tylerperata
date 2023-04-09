import React from 'react'

function Technology({Icon, text}) {
  return (
    <div className="flex gap-2 items-center border px-2 py-1">
        {Icon && <Icon/>}
        <p>{text}</p>
    </div>
  )
}

export default Technology