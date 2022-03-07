import React, { memo } from 'react'
// import PropTypes from 'prop-types'

export default memo(function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.aboutText}</a>
        </li>
        
        
      </ul>
      {/* <form classNameName ="d-flex ">
        <input classNameName ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName ="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div classNameName={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enable dark mode</label>
</div>
    </div>
  </div>
</nav>
  )
}
)
// Navbar.PropTypes={title: PropTypes.string,
//                 aboutText: PropTypes.string}
// }
// Navbar.defaultProps={
//   title:"Set title here",
//   aboutText:"about text here"
// };
