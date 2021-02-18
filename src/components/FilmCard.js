import React, {useState} from "react";
import Style from "./FilmCard.module.scss";
import classNames from "classnames";
import arrietty from "../images/arrietty.jpg";
import castle from "../images/castle.jpg";
import cat from "../images/cat.jpg";
import earthsea from "../images/earthsea.jpg";
import grave from "../images/grave.jpg";
import howl from "../images/howl.jpg";
import kaguya from "../images/kaguya.jpg";
import kiki from "../images/kiki.jpg";
import marnie from "../images/marnie.jpg";
import neighbor from "../images/neighbor.png";
import pompoko from "../images/pompoko.jpg";
import ponyo from "../images/ponyo.jpeg";
import poppy from "../images/poppy.jpg";
import porco from "../images/porco.jpg";
import princess from "../images/princess.jpg";
import spirited from "../images/spirited.jpg";
import whisper from "../images/whisper.jpg";
import wind from "../images/wind.jpg";
import yamadas from "../images/yamadas.jpg";
import yesterday from "../images/yesterday.jpg";

const gradients = [
    {backgroundImage: "linear-gradient(62deg, #21D4FD 0%, #B721FF 100%)"},
    {backgroundImage: "linear-gradient(62deg, #85FFBD 0%, #FFFB7D 100%)"},
    {backgroundImage: "linear-gradient(62deg, #FFE53B 0%, #FF2525 74%)"},
    {backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"},
    {backgroundImage: "linear-gradient(62deg, #0093E9 0%, #80D0C7 100%)"},
    {backgroundImage: "linear-gradient(62deg, #8BC6EC 0%, #9599E2 100%)"},
    {backgroundImage: "linear-gradient(62deg, #a18cd1 0%, #fbc2eb 100%)"},
    {backgroundImage: "linear-gradient(62deg, #cfd9df 0%, #e2ebf0 100%)"},
    {backgroundImage: "linear-gradient(62deg, #f093fb 0%, #f5576c 100%)"},
    {backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"},
]


export default function FilmCard({name, randomNumber, director, releaseYear, description}) {
    const [tabClicked, setTabClicked] = useState(false);

    let img;
    switch (name.toLowerCase()) {
        case "castle in the sky":
            img = castle;
            break;
        case "arrietty":
            img = arrietty;
            break;
        case "grave of the fireflies":
            img = grave;
            break;
        case "my neighbor totoro":
            img = neighbor;
            break;
        case "kiki's delivery service":
            img = kiki;
            break;
        case "only yesterday":
            img = yesterday;
            break;
        case "porco rosso":
            img = porco;
            break;
        case "pom poko":
            img = pompoko;
            break;
        case "whisper of the heart":
            img = whisper;
            break;
        case "princess mononoke":
            img = princess;
            break;
        case "my neighbors the yamadas":
            img = yamadas;
            break;
        case "spirited away":
            img = spirited;
            break;
        case "the cat returns":
            img = cat;
            break;
        case "howl's moving castle":
            img = howl;
            break;
        case "tales from earthsea":
            img = earthsea;
            break;
        case "ponyo":
            img = ponyo;
            break;
        case "from up on poppy hill":
            img = poppy;
            break;
        case "the wind rises":
            img = wind;
            break;
        case "the tale of the princess kaguya":
            img = kaguya;
            break;
        case "when marnie was there":
            img = marnie;
            break;
        default:
            img = null;
    }
    return (
        <div className={Style.filmCard}>
            <div className={classNames(Style.imageFiller, tabClicked && Style.tabClicked)} style={{backgroundImage: `url("${img}")`}}/>
            <div className={classNames(Style.text, tabClicked && Style.tabClicked)}>
                <h3>{name}</h3>
                <p>Directed by {director}</p>
                <p>Released {releaseYear}</p>
            </div>
            <div className={classNames(Style.tab, tabClicked && Style.tabClicked)} style={gradients[randomNumber]} onClick={() => setTabClicked(!tabClicked)}>
                <p>{description}</p>
            </div>
        </div>
    )
}