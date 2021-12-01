
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">BLACKPINK</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">Journey&Interest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Members</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Message from Blinks</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
}