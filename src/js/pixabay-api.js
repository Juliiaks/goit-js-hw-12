

export function apiPixabay(searchWord) {
const API_KEY = "43264950-7d4cd6be2017577f15438949e";
const params = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
});

    return fetch(`https://pixabay.com/api/?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json()
        }); 
}

