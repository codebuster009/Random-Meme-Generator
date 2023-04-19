import React from "react";
import NewImg from './New-Image.png'
export default function Meme () { 
    const [meme , setMeme]= React.useState( {
        topText : "" ,
        bottomText : "" ,
        randomImage : "https://i.imgflip.com/1bgw.jpg"
})

const [allMeme , setallMeme] = React.useState([]);
React.useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
  .then((response) => response.json())
  .then((data) => setallMeme(data.data.memes))
} , [])

function getImage() {
  var random = Math.floor(Math.random() * allMeme.length)
  var url = allMeme[random].url
  setMeme((prevMeme) => {
   return {...prevMeme , randomImage :url}
  })
}
    return (
     <div className="form">
        <div className="inputs">
            <input
            className="form-input"
            placeholder="Top Text"
            onChange={(e) => {
                setMeme({
                    ...meme ,topText: e.target.value
            })
            }}
            value={meme.topText}
            type="text"
            ></input>

            <input
            className="form-input"
            placeholder="Bottom Text"
            value={meme.bottomText}
            onChange={(e) =>  {
                setMeme({
                ...meme , bottomText : e.target.value
            })}}
            type="text"
            ></input>
        </div>
        <button onClick={getImage}><img src={NewImg} width="200px"/></button>
        <div className="meme">
          <img src={meme.randomImage} className="meme-img" />
          <h2 className="top-h2">{meme.topText}</h2>
        <h2 className="bottom-h2">{meme.bottomText}</h2>
        </div>
     </div>
    )
}
