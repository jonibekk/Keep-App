import React from 'react'
import AddNewNote from './AddNewNote'
import MainCardContents from './MainCardContents'


class MainContent extends React.Component {

  constructor(){
    super()

    this.state = {
      dataExist: false,
      style: {display: 'none'},
      deleteKey: 0,
      list: []
    }
    this.addItem = this.addItem.bind(this)
  }

  addItem(m_list){
    if(m_list.length > 0) {
      this.setState({
        dataExist: true,
        style: {display: ''},
        list: m_list
      })
    }
  }

  deleteItem = (key) => {
    console.log('Deleted: ' + key);
    this.setState({ list: [...this.state.list.filter((item) => item.key !== key)], deleteKey: key })
  }

  render () {

    let m_list = this.state.list.map((item) =>
    <MainCardContents deleteItem={this.deleteItem} style={{display: this.state.style}} key={item.key} item={item}/>)

    return(
      <div id="main_content">
        <AddNewNote callBackFromParent={this.addItem} deleteKey = {this.state.deleteKey} />
        <div style={this.state.style} className="card-columns columns-6-xl columns-5-lg columns-4-md columns-3-sm ">
          {m_list}
        </div>
      </div>
    )
  }
}

export default MainContent;
