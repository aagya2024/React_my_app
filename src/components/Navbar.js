import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand d-flex align-items-center" href="/">
        <img 
          src="https://thumbs.dreamstime.com/b/modern-unique-hexagon-letter-ap-logo-design-template-elegant-initial-concept-328327763.jpg" 
          alt="logo" 
          width="40" 
          height="40" 
          className="d-inline-block align-text-top rounded-circle" // makes the image circular
          style={{ marginRight: '10px' }} // Adding space to the right of the logo
        />
        {props.title}
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.about}
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.degrees}

            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Secondary Level Education</a></li>
              <li><a className="dropdown-item" href="/">Higher Level Education</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">On Going..............</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Hobbies</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
    degrees:PropTypes.string.isRequired
}
Navbar.defaultProps={
title:'set title',
about:'set about '
}