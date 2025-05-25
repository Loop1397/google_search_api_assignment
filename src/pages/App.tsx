import { useState } from 'react'
import './App.css'
import GoogleCustomSearchAPI from '../apis/GoogleCustomSearchAPI';

function App() {
  const [text, setText] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(1);
  const [result, setResult] = useState<any>(null);

  const customSearchAPI = new GoogleCustomSearchAPI(
    import.meta.env.VITE_CUSTOM_SEARCH_ENGINE_ID,
    import.meta.env.VITE_API_KEY
  );

  const activeEnter = async () => {
    // テキストが空だったら反応しないようにする
    if (text === "") {
      return null;
    }

    try {
      const searchResults = await customSearchAPI.search(text, startIndex);
      console.log(searchResults);
      setResult(searchResults);
    } catch (error) {
      console.error(`Error: ${error}`);
      setResult(null);
    }
  }

  return (
    <div>
      <input
        value={text}
        onChange={event => {
          setText(event.target.value);
        }}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            activeEnter();
          }
        }}
      ></input>
      <p>{ }</p>
    </div>
  )
}

export default App
