import React from 'react'

function Header() {
  return (
    <div className="navbar bg-emerald-300 text-black">
      <div className='w-2/3'>
        <a className="btn btn-ghost text-xl">Janine</a>
      </div>
      <div className='w-1/3'>
        <a className="btn btn-ghost text-xl">Home</a>
        <a className="btn btn-ghost text-xl">About</a>
        <a className="btn btn-ghost text-xl">Contacts</a>
      </div>
    </div>
  )
}

export default Header