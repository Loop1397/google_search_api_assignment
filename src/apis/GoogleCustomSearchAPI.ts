import axios from 'axios'

type SearchResult = {
    displayLink: string;
    formattedUrl: string;
    htmlFormattedUrl: string;
    htmlSnippet: string;
    htmlTitle: string;
    kind: string;
    // target url
    link: string;
    // pagemap안의 cse_thumbnail가 존재할 경우 썸네일 이미지로 사용 가능
    // cse_thumbnail은 array로, cse_thumnail[0].src가 썸네일의 이미지 주소
    pagemap: object;
    snippet: string;
    title: string;
};

class GoogleCustomSearchAPI {
    // 検索エンジン
    private readonly cx: string;
    // API key
    private readonly apiKey: string;

    constructor(cx: string, apiKey: string) {
        this.cx = cx;
        this.apiKey = apiKey;
    }

    public async search(query: string, startIndex: number = 1, numResults: number = 10): Promise<SearchResult[]> {
        try {
            const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
                params: {
                    cx: this.cx,
                    key: this.apiKey,
                    // 検索語
                    q: query,
                    // 変換される検索結果の数(最大10個)
                    num: numResults,
                    // 変換される検索結果の1番目のindex
                    start: startIndex,
                },
            });

            return response.data.items;
        } catch (error) {
            console.error('Error fetching search results:', error);
            return [];
        }
    }
}

export default GoogleCustomSearchAPI;