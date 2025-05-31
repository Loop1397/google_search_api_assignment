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

  const searchByApi = async () => {
    try {
      const searchResults = await customSearchAPI.search(text, startIndex);
      setResult(searchResults);
    } catch (error) {
      console.error(`Error: ${error}`);
      setResult([]);
    }
  }

  const handleEnterKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      await searchByApi();
    }
  };

  const handlePreviousClick = async () => {
    if (startIndex >= 11) {
      await setStartIndex(startIndex - 10);
      searchByApi();
    }
  };

  const handleNextClick = async () => {
    await setStartIndex(startIndex + 10);
    searchByApi();
  };

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
            onKeyDown={handleEnterKeyPress}
            style={{ width: '560px', height: '30px', fontSize: '18px', border: 'none' }}
          />
        </div>
      </header>
      <div id="content">
        <ul id='views'>
          {result.map((view: SearchResult) => (
            <li key={view.title} className='view-wrap'>
              <div className="view-title">
                <img className='title-thumbnail' src={view.pagemap.cse_thumbnail?.[0]?.src} />
                <a className='title-text' href={view.link}>{view.title}</a>
              </div>
              <p className='view-content'>{view.snippet}</p>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePreviousClick}>이전</button>
        <button onClick={handleNextClick}>다음</button>
      </div>

    </div >
  )
}

export default App
