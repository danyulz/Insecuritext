import ScrollTextFast from './components/ScrollTextFast/ScrollTextFast';
import { useState } from 'react';
import './App.css';
import ScrollTextSlow from './components/ScrollTextSlow/SrollTextSlow';
import ScrollTextMedium from './components/ScrollTextMedium/SrollTextMedium';

function App() {

  const [text, setText] = useState("nothing");
  const handleClick = (event) => {
    setText(event.target.value);
  }

const scroll = [text, text, text, text]
const textList = scroll.map(text => <p><ScrollTextFast text={text}/></p>) 
  return (
    <div className="App">
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextMedium text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
        <p><ScrollTextSlow text={text}/></p>
        <p><ScrollTextFast text={text}/></p>
      <div>
        <input className="input" onChange={handleClick} title="what are your insecurites?"></input>
      </div>
    </div>
  );
}

export default App;
