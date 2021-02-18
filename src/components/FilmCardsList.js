import React from "react";
import Style from "./FilmCardList.module.scss";
import FilmCard from "./FilmCard";

export default function FilmCardsList({films}) {
    return (
        <div className={Style.cardList}>
            {
                films.map((film, i) => {
                    console.log('payton', film)
                    const randomNumber =  Math.floor((Math.random() * 10) + 1) - 1;
                    return (
                        <FilmCard key={films[i]} name={films[i].title} description={films[i].description} randomNumber={randomNumber} director={films[i].director} releaseYear={films[i]['release_date']} description={films[i].description} />
                    )
                })
            }
        </div>
    );
}