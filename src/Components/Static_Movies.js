import axios from "axios";

const Names = ["The Godfather",
    "The Shawshank Redemption",
    "Titanic",
    "Money Heist",
    "Jurassic Park",
    "Forrest Gump",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Inception ",
    "The Matrix",
    "Fight Club",
    "Avatar",
    "Back to the Future",
    "The Lion King",
    "Gladiator",
    "Schindler's List",
    "Goodfellas",
    "The Avengers",
    "Jaws",
    "Saving Private Ryan",
    "E.T. the Extra-Terrestrial",
    "The Silence of the Lambs",
    "Braveheart",
    "The Departed",
    "La La Land",
    "The Terminator",
    "Rocky",
    "Casablanca",
    "The Wizard of Oz"
];


export async function Get_Movie(movie){
    const url = `http://www.omdbapi.com/?apikey=17d172fa&t=${movie}`;
    var data = 0;
    const options = {
        headers: {
          accept: 'application/json',          
        }
    };
    try {
        const respnse = await axios.get(url, options);     
        data = respnse.data;
    } catch (err) {
        console.error('error:' + err);
    }    
    return data;
}

export default Names;