import React from 'react';
import Header from './components/Header'
import MainContent from './components/MainContent'
// <AddNewNote />
// <MainCardContents />

class App extends React.Component {

  render(){

    return (
      <div className='App' style={{alignItems: 'center'}}>
        <Header />
        <MainContent />
      </div>
    );
  }

}

export default App;
