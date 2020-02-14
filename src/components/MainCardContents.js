import React, {Component} from 'react'

class MainCardContents extends Component {

  constructor(){
    super()

    this.state = {
      toggle_hover: false
    }
  }

  deleteItem = () => {
    this.props.deleteItem(this.props.item.key);
  }

  toggleHoverIn = (e) => {
    this.setState({toggle_hover: !this.state.toggle_hover})
    console.log(this.state.toggle_hover);
  }
  toggleHoverOut = (e) => {
    this.setState({toggle_hover: !this.state.toggle_hover})
    console.log(this.state.toggle_hover);
  }

  render(){

    return(
        <div className="card card-content">
          <div
            onMouseEnter={this.toggleHoverIn}
            onMouseLeave={this.toggleHoverOut}
            className="card_toggle" style={style.card_toggle}>
            <div className='card_toggle_item' style={style.card_toggle_item} ></div>
            <div className='card_toggle_item' style={style.card_toggle_item} ></div>
            <div className='card_toggle_item' style={style.card_toggle_item} ></div>
          </div>
          <h2 style={style.text_style} >{this.props.item.title}</h2>
          <p style={style.text_style} className='lead'>{this.props.item.content}</p>
          <button style={style.btn_style} className='btn btn-danger' onClick={this.deleteItem}>Delete</button>
        </div>
    )

  }

}

const style = {
  text_style: {
    width: '90%'
  },
  btn_style: {
    borderRadius: '15px',
    position: 'absolute',
    right: '0',
    bottom: '0',
    margin: '5px'
  },
  card_toggle: {
    display: 'grid-start',
    float: 'right',
    textAlign: 'center'
  },
  card_toggle_item: {
    background: 'black',
    flex: '1',
    marginRight: '10px',
    marginBottom: '3px',
    width: '6px',
    height: '6px',
    borderRadius: '50%'
  }
}

export default MainCardContents;
