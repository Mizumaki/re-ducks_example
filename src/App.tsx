import * as React from 'react';
import './App.css';
import Comments from './containers/Comments';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Comments />
      </div>
    );
  }
}

export default App;