import { useState } from 'react'
import './App.css'
import GoogleCustomSearchAPI from '../apis/GoogleCustomSearchAPI';
import type { SearchResult } from '../types/Search.Result';

function App() {
  const [text, setText] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(1);
  const [result, setResult] = useState<SearchResult[]>([]);

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
      setResult([]);
    }
  }

  return (
    <div id="wrap">
      <header>
        {/* whiteSpace: P태그가 눌려도 줄바꿈을 하지 않게 막아주는 옵션 */}
        <p className='logo' style={{ color: '#3C80F2' }}>G</p>
        <p className='logo' style={{ color: '#E9442E' }}>C</p>
        <p className='logo' style={{ color: '#FABD04' }}>S</p>
        <p className='logo' style={{ color: '#3C80F2' }}>A</p>
        <p className='logo' style={{ color: '#34A853' }}>P</p>
        <p className='logo' style={{ color: '#E9442E' }}>I</p>
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
            style={{ width: '560px', height: '30px', fontSize: '18px', border: 'none' }}
          />
        </div>
      </header>
      <div id="content">
        <ul id='views'>
          <li className='view-wrap'>
            {/* {result.map((view) => {

            })} */}
            <div className="view-title">
              <img className='title-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" />
              <a className='title-text' href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
            </div>
            <p className='view-content'>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
          </li>
          <li className='view-wrap'>
            <div className="view-title">
              <img className='title-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" />
              <a className='title-text' href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
            </div>
            <p className='view-content'>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
          </li>
          <li className='view-wrap'>
            <div className="view-title">
              <img className='title-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" />
              <a className='title-text' href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
            </div>
            <p className='view-content'>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
          </li>
          <li className='view-wrap'>
            <div className="view-title">
              <img className='title-thumbnail' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkWOjzL1pMnggqccpsEEBHjVvjWqc6Y5thpNSLUXDRIcQ9hjoUQJRebRQ&s" />
              <a className='title-text' href="https://x.com/NEKOMANYANKO/status/1921451051959325096">竹猫（ちゃろー！） on X: \"なんで忙しー日はライフ10なの ...</a>
            </div>
            <p className='view-content'>May 11, 2025 ... なんで忙しー日はライフ10なの〜 カレイドスコープは50じゃないの〜？</p>
          </li>
        </ul>
      </div>

    </div >
  )
}

export default App
