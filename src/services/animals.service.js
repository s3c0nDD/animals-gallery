const fetchImages = ({ type, count }) => {
  return fetch(`/${type}?count=${count}`)
      .then(response => {
        return response.json()
      })
      .catch(e => { throw new Error(`Error: ${e}`) });
};

export default {
  fetchImages
}