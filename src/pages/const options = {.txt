const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'afda7641dbmshbb164e8a263a7d5p1ddd07jsn01fe1e2c535c',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
