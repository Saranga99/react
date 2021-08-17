import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import  {saveAs} from "file-saver";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="Name" name="name" onChange{this.hadleChange}></input>
     
    </div>
  );
}

export default App;
