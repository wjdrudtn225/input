import React, { Component } from 'react';
import './App.css';
import { InputForm } from './InputText'
import NumForm from "./NumForm";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm/>
          <NumForm/>
      </div>
    );
  }
}
