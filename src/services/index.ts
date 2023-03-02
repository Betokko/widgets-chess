export const getData = async () => {
  const data = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
  return data
}
