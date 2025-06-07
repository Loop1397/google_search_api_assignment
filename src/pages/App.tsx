import { useEffect, useState } from "react";
import "./App.css";
import GoogleCustomSearchAPI from "../apis/GoogleCustomSearchAPI";
import type { SearchResult } from "../types/Search.Result";

function App() {
  const [text, setText] = useState<string>("");
  const [startIndex, setStartIndex] = useState<number>(1);
  const [result, setResult] = useState<SearchResult[]>([]);

  const customSearchAPI = new GoogleCustomSearchAPI(import.meta.env.VITE_CUSTOM_SEARCH_ENGINE_ID, import.meta.env.VITE_API_KEY);

  useEffect(() => {
    searchByApi();
    // console.log(`숫자 변경! ${text}, ${startIndex}`)
    scrollTop();
  }, [startIndex]);

  const searchByApi = async () => {
    try {
      console.log(text, startIndex);
      const searchResults = await customSearchAPI.search(text, startIndex);
      setResult(searchResults);
    } catch (error) {
      console.error(`Error: ${error}`);
      setResult([]);
    }
  };

  const handleEnterKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await searchByApi();
      // console.log(`검색! ${text}, ${startIndex}`)
    }
  };

  const handlePreviousClick = async () => {
    if (startIndex >= 11) {
      setStartIndex(startIndex - 10);
    }
  };

  const handleNextClick = async () => {
    setStartIndex(startIndex + 10);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0
    });
  }

  return (
    <div id="wrap">
      <header>
        {/* whiteSpace: P태그가 눌려도 줄바꿈을 하지 않게 막아주는 옵션 */}
        <p className="logo" style={{ color: "#3C80F2" }}>
          G
        </p>
        <p className="logo" style={{ color: "#E9442E" }}>
          C
        </p>
        <p className="logo" style={{ color: "#FABD04" }}>
          S
        </p>
        <p className="logo" style={{ color: "#3C80F2" }}>
          A
        </p>
        <p className="logo" style={{ color: "#34A853" }}>
          P
        </p>
        <p className="logo" style={{ color: "#E9442E" }}>
          I
        </p>
        <div id="input-box">
          <input
            value={text}
            onChange={event => {
              setText(event.target.value);
            }}
            onKeyDown={handleEnterKeyPress}
            style={{ width: "560px", height: "30px", fontSize: "18px", border: "none" }}
          />
        </div>
      </header>
      <div id="content">
        <ul id="views">
          {result.map((view: SearchResult) => (
            <li key={view.title} className="view-wrap">
              <div className="view-title">
                <img className="title-thumbnail" src={view.pagemap.cse_thumbnail?.[0]?.src} />
                <a className="title-text" href={view.link}>
                  {view.title}
                </a>
              </div>
              <p className="view-content">{view.snippet}</p>
            </li>
          ))}
        </ul>
        {result.length !== 0 ? (
          startIndex === 1 ? (
            <div style={{ marginTop: "20px" }}>
              <button id="next-button" onClick={handleNextClick}>
                Next
              </button>
            </div>
          ) : (
            <div style={{ marginTop: "20px" }}>
              <button id="prev-button" onClick={handlePreviousClick}>
                Prev
              </button>
              <button id="next-button" onClick={handleNextClick} style={{ marginLeft: "10px" }}>
                Next
              </button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}

export default App;
