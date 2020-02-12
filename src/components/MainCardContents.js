import React, {Component} from 'react'

class MainCardContents extends Component {

  render(){

    return(
        <div className="card card-content">
          <h2>{this.props.title}</h2>
          <p className='lead'>{this.props.content}</p>
        </div>
    )

  }

}

export default MainCardContents;
