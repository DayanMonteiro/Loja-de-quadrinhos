const axios = require("axios");

// obs:
// no frontend você vai importar assim.
// import axios from 'axios';

const fetchCharacters = async () => {
  try {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=fec724da5a8ac11f692746467ad20d86&hash=8f7d4c3161aa079300daf876c3f7bcdb"
    );

    if (response.status === 200) {
      const personagens = response.data.data.results;

      console.log(
        personagens
          .slice(10)
          .map((p) => p.name + " - " + p.description + p.thumbnail)
          .join("\n ")
      );
    }
  } catch (error) {
    console.log("erro", error.message);
  }
};

fetchCharacters();
