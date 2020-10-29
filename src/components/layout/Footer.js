import React from 'react';

function Footer() {
  return (
      <div>
          <div className="row">
              <div className="col-md-12">
                  <div className="footer p-3 mt-4 text-center bg-light ">Developed By:
                      <span className=" text-info " > Shivam Kumar
                      </span>, Using <strong className="text-info"><i className="fab fa-react text-info" /> React.js </strong> &amp; <strong className="text-info"> Redux.js </strong> Integrated with external movies data API
                      <a href="http://www.omdbapi.com/" trget="_blank"> <strong> OMDB</strong> </a>
                  </div>
              </div>
          </div>
      </div>
  )
}
export default Footer;
