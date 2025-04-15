import React from 'react'
import { Link } from 'react-router-dom';
export default function NotFoundPage() {
  return (
    <div className='m-5 p-5 fs-1'>
        <h1>
            Error 404. Page Not Found
        </h1>
        <Link to="/" className="btn btn-dark mt-3">View Products</Link>
    </div>
  )
}
