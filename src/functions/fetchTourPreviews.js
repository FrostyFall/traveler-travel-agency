import axios from "axios";

const fetchTourPreviews = async (url, queries, setData, isSkip = false) => {
  try {
    // Get Query String
    let queryArr = [];
    for (let query in queries) {
      if (queries[query] !== null && queries[query] !== '') queryArr.push(`${query}=${queries[query]}`);
    }
    const queryString = queryArr.join('&');

    console.log('API Call with query string ' + queryString);

    // setData((prevState) => ({ ...prevState, isFetching: true }));
    const res = await axios.get(`${url}${isSkip ? '&' + queryString : '?' + queryString}`)
    if (isSkip) {
      const { docs, retrievedDocs, documentsCount } = res.data;
      setData(prevState => {
        return { data: {retrievedDocs: retrievedDocs, documentsCount: documentsCount, docs: prevState.data.docs.concat(docs)}, isFetching: false, isError: false }
      })
    } else {
      setData({ data: { ...res.data }, isFetching: false, isError: false });
    }
  } catch(err) {
    // setData(({ data: [], isFetching: false, isError: true }));
  }
}

export default fetchTourPreviews;