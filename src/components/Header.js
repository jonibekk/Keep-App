import React, {Component} from 'react'

class Header extends Component {

  style = {
    background: 'bg-light'
  }

  constructor(){
    super()
    this.state = {
      burgerOC: true
    }
    this.openNavClose = this.openNavClose.bind(this)
  }

  openNavClose() {
    this.setState(state => ({
      burgerOC: !state.burgerOC
    }))

    if(this.state.burgerOC) {
      document.getElementById("mySidenav").style.width = "20%";
      document.getElementById("main_content").style.marginLeft = "20%";
      this.style = {
        background: 'bg-dark'
      }
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main_content").style.marginLeft = "0";
      this.style = {
        background: 'bg-light'
      }
    }
  }

  render(){

    return(
      <header>
        <div className="my-header-sidenav">
          <div id="mySidenav" className="sidenav">
            <div className="menu-items">
              <a href="/#">About</a>
              <a href="/#">Services</a>
              <a href="/#">Clients</a>
              <a href="/#">Contact</a>
            </div>
          </div>
          <nav className='navbar navbar-light bg-light'>
            <div className="toggler-icon" onClick={this.openNavClose} style={this.style}>
              <div className='toggler-icon-row'></div>
              <div className='toggler-icon-row'></div>
              <div className='toggler-icon-row'></div>
            </div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="navbar-brand" href="#">Google Keep Clone <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </nav>

        </div>
      </header>
    )

  }

}

export default Header;
