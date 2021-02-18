import Style from "./App.module.scss"
import React, {useState, useEffect} from "react";
import FilmCardsList from "./components/FilmCardsList";

function App() {
    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(resp => resp.json())
            .then((resp) => setFilms(resp));
    }, []);

   const onSearchChange = e => {
       setSearch(e.target.value);
   }

   const filteredFilms = films.filter(film => {
       return (
           film.title.toLowerCase().includes(search.toLowerCase())
       );
   })

    return (
        <div className={Style.main}>
           <div className={Style.topPortion}>
               <h1>ghibli gallery</h1>
               <div>
                   <input type="text" onChange={onSearchChange} placeholder={"Search for a film..."} value={search}/>
               </div>
           </div>
            <div className={Style.list}>
                <FilmCardsList films={filteredFilms} />
            </div>
        </div>
    );
}

export default App;
