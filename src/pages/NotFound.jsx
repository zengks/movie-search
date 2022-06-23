import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='container'>
      <div className="d-flex flex-column text-center mt-5">
        <h1>Oops!</h1>
        <h1>Page Not Found!</h1>
        <Link className='btn btn-primary my-3 w-50 mx-auto' to='/'>Back to Home</Link>
      </div>
    </div>
  )
}

export default NotFound