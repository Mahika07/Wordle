import React from "react"


export default function Navbar(props) {
  const handleClickScroll = () => {
    const element = document.getElementById('aboutPage');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ fontSize: '2em', marginRight: '1em' }} > Wordle</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" c aria-current="page" style={{ fontSize: '1.2em', cursor: 'pointer' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id='about' onClick={handleClickScroll} style={{ fontSize: '1.2em', cursor: 'pointer' }}>About</a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
              <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault" id="switchMode">Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}