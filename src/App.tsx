import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<any>(null);

  const activeEnter = async (e: any) => {
    if (e.key === 'Enter') {
      const response: any = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
        params: {
          cx: import.meta.env.VITE_CUSTOM_SEARCH_ENGINE_ID,
          key: import.meta.env.VITE_API_KEY,
          q: text,
        },
      });

      console.log(response.data.items);
      // setResult(response.data.items[0].title);
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
      <p>{result}</p>
    </div>
  )
}

export default App
