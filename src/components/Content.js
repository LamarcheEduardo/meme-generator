import React, {useState} from "react";
import memesData from "../memesData";

export default function Content(){
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })


    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event){
        
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <div className="jumbotron">
            <div className="content--placeholder">

               <div className="form">

                        <input 
                            type="text" 
                            name="topText" 
                            placeholder="Top text" 
                            className="input--field"
                            onChange={handleChange}
                        />

                    
                        <input 
                            type="text" 
                            name="bottomText" 
                            placeholder="Bottom Text" 
                            className="input--field"
                            onChange={handleChange}
                        />

                </div>
                <div className="button-side">
                    <button className="content--button" onClick={getMemeImage}>Get new meme image</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>

        </div>
    )
}