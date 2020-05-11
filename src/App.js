import React from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Card
          title="Sách dạy làm giàu"
          description="Tác giả: Huấn rose"
          buttonName="Add to card"
        />
      </div>
    );
  }
}

export default App;
