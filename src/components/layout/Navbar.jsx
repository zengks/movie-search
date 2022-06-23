import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className='navbar bg-dark d-flex flex-row'>
        <div className="container mx-auto">
          <div className="ms-2">
            <Link to='/' className='navbar-brand text-white'>OMDb</Link>
          </div>
          <div>
            <ul className='navbar-nav d-flex flex-row me-3 '>
              <li className='nav-item me-4'><Link to='/' className='nav-link text-white'>Home</Link></li>
              <li className='nav-item me-4'><Link to='/about' className='nav-link text-white'>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar