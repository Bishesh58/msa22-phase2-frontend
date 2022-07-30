import { useEffect, useState } from "react";
import axios from "axios";
import Thumbnail from "./components/Thumbnail";

interface Character {
  _id: number;
  name: string;
  imageUrl: string;
  films?: [];
  tvShows?: [];
  videoGames?: [];
}

function App() {
  const [characters, setCharacters] = useState<Character[] | undefined>([]);
  const getCharacters = () => {
    const response = axios
      .get("https://api.disneyapi.dev/characters")
      .then((res) => setCharacters(res.data.data))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <div className="App">
      <h1 className="text-green-600">Search Disney Characters:</h1>
      <div className="flex flex-wrap">
        {characters &&
          characters.map((character, i) => <Thumbnail key={character._id} character={character} />)}
      </div>
    </div>
  );
}

export default App;
