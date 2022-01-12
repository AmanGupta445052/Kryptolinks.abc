export const getUserInfo =  (slug) => {
  fetch(`http://localhost:8000/api/getinfo/${slug}`)
  .then(res => res.json())
  .then(data => {
      console.log(data)
      return data
  })
  .catch(err => console.log(err))
};
