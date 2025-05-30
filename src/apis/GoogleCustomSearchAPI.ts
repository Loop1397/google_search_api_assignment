import axios from 'axios'
import type { SearchResult } from '../types/Search.Result';

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