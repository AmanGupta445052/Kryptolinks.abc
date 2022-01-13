export const userInfoFetch = (slug) => {
  fetch(`http://localhost:8000/api/user/get/${slug}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
};
