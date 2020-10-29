import React from 'react';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-5">
            <i className="fab fa-react fa-5x" id="React-logo" />
                        <div className="container">
                                
                            <div className="navbar-header" >
                                <a className = "navbar-brand text-white text-lg brand-text " href="/"> Movies and Series Info </a>
                            </div>
                            
                            <ul className="navbar-nav ml-auto text-light d-inline-block">
                                <li className="nav-item d-inline-block mr-4">
                                    <i className="fab fa-imdb fa-5x" id="imdb-logo"/>
                                </li>
                                
                                <li className="nav-item d-inline-block mr-4">
                                    <i className="fas fa-camera fa-4x" id="camera-logo"/>
                                </li>

                                <li className="nav-item d-inline-block mr-4">
                                    <i className="far fa-smile-beam fa-spin fa-2x" id="smiley-logo"/>
                                </li>

                            </ul>
                        </div>
                </nav>
  </div>
  );
}

export default Navbar;
