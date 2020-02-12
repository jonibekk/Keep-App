import React from 'react'
import AddNewNote from './AddNewNote'
import MainCardContents from './MainCardContents'


class MainContent extends React.Component {

  constructor(){
    super()

    this.state = {
      dataExist: false,
      style: {display: 'none'},
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

  render () {

    let m_list = this.state.list.map((item) =>
    <MainCardContents style={{display: this.state.style}} title={item.title} content={item.content}/>)

    return(
      <div id="main_content">
        <AddNewNote callBackFromParent={this.addItem}/>
        <div style={this.state.style} className="card-columns columns-6-xl columns-5-lg columns-4-md columns-3-sm ">
          {this.state.dataExist && m_list}
        </div>
      </div>
    )
  }
}

export default MainContent;
