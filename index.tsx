import React, { Component } from 'react';
import { render } from 'react-dom';
import FileUpload from './FileUpload';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FileUpload />
    );
  }
}

render(<App />, document.getElementById('root'));
