import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
    <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2 text-white " style={{backgroundColor:"#020529"}}>
      <div className="col-12">
        <div className="row my-4 row-1 no-gutters">
          <div className="col-sm-3 col-auto text-center">
            <small>Ⓒ KSRMCE</small>
          </div>
          <div className="col-md-3 col-auto " />
          <div className="col-md-3 col-auto" />
          <div className="col  my-auto text-md-left  text-right ">
            {" "}
            <small>
              {" "}
              @KSRMCE OCCATION CRAFTERS{" "}
              <span>
                <img
                  src="https://i.imgur.com/TtB6MDc.png"
                  className="img-fluid "
                  width={25}
                />
              </span>{" "}
              <span>
                <img
                  src="https://i.imgur.com/N90KDYM.png"
                  className="img-fluid "
                  width={25}
                />
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer