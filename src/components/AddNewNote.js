import React, {Component} from 'react'

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

  randGen(){
    let id = Math.floor(Math.random() * 10000000)
    while (idGen.indexOf(id) !== -1) {
      id = Math.floor(Math.random() * 10000000)
    }
    idGen.push(id)

    return id;
  }

  onAddItem() {
    this.list.push(
      {
        key: this.randGen(),
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

  componentWillMount(){
    document.addEventListener('mousedown', this.enterNote, false);
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.enterNote, false);
  }

  enterNote = (e) => {
    if(this.node.contains(e.target)){
      document.getElementById('list').style.maxHeight = style.enterNoteStyle.maxHeight
      document.getElementById('list').style.transition = style.enterNoteStyle.transition
      document.addEventListener('keydown', function(event){
        if(event.keyCode === 13){
          document.getElementById('content_id').focus()
        }
      })
    }
    else {
      document.getElementById('list').style.maxHeight = style.closeNoteStyle.maxHeight
      document.getElementById('list').style.transition = style.closeNoteStyle.transition
    }
  }

  render(){

    if (this.props.deleteKey !== 0){
      this.list = this.list.filter((item) => item.key !== this.props.deleteKey)
    }

    return (
      <div id="menu" onClick={this.enterNote} ref={node => this.node = node}>
        <div style={{display: 'flex'}}>
          <div suppressContentEditableWarning={true}
            onInput={this.handleChangeTitle}
            className='h3 title-div'
            contentEditable='true'
            data-text="Title..">{(this.state.isAdded) && this.state.title}</div>
        </div>
        <div id="list">
            <div id='content_id'
              suppressContentEditableWarning={true}
              onInput={this.handleChangeContent}
              className='lead body-div'
              contentEditable='true'
              data-text="Add note..">{(this.state.isAdded) && this.state.content}</div>
            <button name='title' onClick = {this.onAddItem} style={style.btn_style} className="fab btn btn-success">Add</button>
        </div>
      </div>
    )
  }

}

const idGen = []
const style = {
  enterNoteStyle: {
    maxHeight: '400px',
    transition: 'max-height 0.5s ease-in',
  },
  closeNoteStyle: {
    maxHeight: '0',
    transition: 'max-height 0.5s ease-out',
  },
  btn_style: {
    borderRadius: '15px',
    display:'relative',
    bottom: '0px',
    height: '40px',
    transition: 'all 0.1s ease-in-out',
    margin: '5px'
  }
}
export default AddNewNote;
