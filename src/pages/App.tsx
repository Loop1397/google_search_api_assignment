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
    <div id="content">
      <header>
        <div id="input-box">
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
          />
        </div>

      </header>
      <p>{ }</p>
      <a href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
      <p>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" style={{ width: "200px", height: '200px' }} />
      <a href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
      <p>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" style={{ width: "200px", height: '200px' }} />
      <a href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
      <p>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" style={{ width: "200px", height: '200px' }} />
      <a href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
      <p>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" style={{ width: "200px", height: '200px' }} />
    </div>
  )
}

export default App
