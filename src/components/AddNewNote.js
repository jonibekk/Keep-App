import React, {Component} from 'react'
import MainCardContents from './MainCardContents'

class AddNewNote extends Component {

  constructor(props){
    super(props)

    this.state = {
      isAdded: false,
      title: '',
      content: ''
    }

    this.list = []
    this.onAddItem = this.onAddItem.bind(this)
  }

  onAddItem() {
    this.list.push(
      {
        key: 1,
        title: this.state.title,
        content: this.state.content
      })
    this.setState({
      isAdded: true,
      title: '',
      content: ''
    })

    this.props.callBackFromParent(this.list)
  }

  handleChangeTitle = evt => {
    this.setState({title: evt.currentTarget.textContent});
    this.setState({isAdded: false})
  };
  handleChangeContent = evt => {
    this.setState({content: evt.currentTarget.textContent});
    this.setState({isAdded: false})
  };

  render(){

    return(
      <div id="menu">
          <div name='content'
            onInput={this.handleChangeTitle}
            className='h3 title-div'
            contentEditable='true'
            data-text="Title..">{(this.state.isAdded) && this.state.title}</div>
          <div id="list">
              <div name='content'
                onInput={this.handleChangeContent}
                className='lead body-div'
                contentEditable='true'
                data-text="Add note..">{(this.state.isAdded) && this.state.content}</div>
              <div name='title' onClick = {this.onAddItem} className="fab"> + </div>
          </div>
      </div>
    )

  }

}

export default AddNewNote;
