export type SearchResult = {
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
    pagemap: any;
    snippet: string;
    title: string;
};

