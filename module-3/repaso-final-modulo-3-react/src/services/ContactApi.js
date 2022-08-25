const getDataApi = () => {
  return fetch("https://randomuser.me/api/?results=50")
  .then(response => response.json())
  .then(data => {
    // limpiar los datos
    const dataClean = data.results.map(user => {
      return {
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        gender: user.gender,
        age: user.dob.age,
        city: user.location.city,
        image: user.picture.large,
        email: user.email
      }
    });
    return dataClean;
  })
}

export default getDataApi;