import React from 'react'

function Footer() {

  const footerYear = new Date().getFullYear();

  return (
    <footer className='container mt-auto'>
      <div className='text-center'>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer