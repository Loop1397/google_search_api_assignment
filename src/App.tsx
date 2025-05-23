import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState<string>("");

  const activeEnter = (e) => {
    if (e.key === 'Enter') {
      alert(`${text}!!!`);
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={event => {
          setText(event.target.value);
        }}
        onKeyDown={e => activeEnter(e)}
      ></input>
      <p>{text}</p>
    </div>
  )
}

export default App
