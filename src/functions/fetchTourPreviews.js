import axios from "axios";

async function fetchTourPreviews(url, queries, setData, isSkip = false) {
  try {
    // Make query string
    let queryArr = [];

    for (let query in queries) {
      if (queries[query] !== null && queries[query] !== '') queryArr.push(`${query}=${queries[query]}`);
    }

    const queryString = queryArr.join('&');

    // Fetch data
    const res = await axios.get(`${url}${isSkip ? '&' + queryString : '?' + queryString}`);

    if (isSkip) {
      const { docs, retrievedDocs, documentsCount } = res.data;

      setData(prevState => {
        return { data: {retrievedDocs: retrievedDocs, documentsCount: documentsCount, docs: prevState.data.docs.concat(docs)}, isError: false }
      })
    } else {
      setData({ data: { ...res.data }, isError: false });
    }
  } catch(err) {
    setData(({ data: [], isError: true }));
  }
}

export default fetchTourPreviews;