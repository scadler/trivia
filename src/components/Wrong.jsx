import React, { Component } from 'react';

class Wrong extends Component{

    render(){

    let wrong = ["https://media.tenor.com/images/4720ea4ca73eabcbdbb878c13ae272f1/tenor.gif", "https://media.tenor.com/images/6eab85d212226d1af8c09bf2103ee955/tenor.gif",
    "https://media.tenor.com/images/aba657f0be4d10fe1996a0ab3dfa72c0/tenor.gif", "https://media.tenor.com/images/2c42c9b0c0f9ecd6c90530a3fc24cad7/tenor.gif",
    "https://media3.giphy.com/media/xUn3BYJ6Bk23k1wASc/200.webp?cid=790b7611d80c863aee5dee49bea68052597e70fa074f0c0c&rid=200.webp",
    "https://media3.giphy.com/media/ie0rqqNS40WwYhBU4L/200.webp?cid=790b7611abf0b16042c6545aba86daad2379fc4dd44182a7&rid=200.webp",
    "https://media1.giphy.com/media/23BST5FQOc8k8/200.webp?cid=790b7611507ab0d433a653e44e771815c0cb2c0ea2ce742c&rid=200.webp",
    "https://media3.giphy.com/media/spfi6nabVuq5y/200.webp?cid=790b7611507ab0d433a653e44e771815c0cb2c0ea2ce742c&rid=200.webp",
    "https://media1.giphy.com/media/15aGGXfSlat2dP6ohs/200.webp?cid=790b76112bc32efa6386095bb5f10c18ed535e10c171dc33&rid=200.webp",
    "https://media1.giphy.com/media/W5YVAfSttCqre/200w.webp?cid=790b76112bc32efa6386095bb5f10c18ed535e10c171dc33&rid=200w.webp",
    "https://media1.giphy.com/media/ftqLysT45BJMagKFuk/200.webp?cid=790b76112bc32efa6386095bb5f10c18ed535e10c171dc33&rid=200.webp",
    "https://media1.giphy.com/media/wofftnAdDtx4s/200.webp?cid=790b76112bc32efa6386095bb5f10c18ed535e10c171dc33&rid=200.webp",
    "https://media3.giphy.com/media/3ohs7KViF6rA4aan5u/200.webp?cid=790b76119f262d7ac305e67747025d4229a057346dd74cfd&rid=200.webp",
    "https://media2.giphy.com/media/hPPx8yk3Bmqys/giphy.webp?cid=790b7611ab3d919091a661426534042e2ea8ef2bb630ab03&rid=giphy.webp",
    "https://media3.giphy.com/media/4OJFCEeGzYGs0/200.webp?cid=790b7611ab3d919091a661426534042e2ea8ef2bb630ab03&rid=200.webp",
    "https://media1.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.webp?cid=790b7611ab3d919091a661426534042e2ea8ef2bb630ab03&rid=giphy.webp",
    "https://media0.giphy.com/media/m8eIbBdkJK7Go/200.webp?cid=790b7611ab3d919091a661426534042e2ea8ef2bb630ab03&rid=200.webp",
    "https://media0.giphy.com/media/m8eIbBdkJK7Go/200.webp?cid=790b7611ab3d919091a661426534042e2ea8ef2bb630ab03&rid=200.webp",
    "https://media2.giphy.com/media/jIu44mYwUItSHTW3tj/giphy.webp?cid=790b761191018b589d09416fc1effd7ca8d0123ff970f778&rid=giphy.webp",
    "https://media0.giphy.com/media/3ohhwtQ3U0wsyytaIU/giphy.webp?cid=790b761127537490419b32ab3a0e0914713e353c8e467e1d&rid=giphy.webp",
    "https://media2.giphy.com/media/BcPfTUCqYZSL5NZC0p/giphy.webp?cid=790b76115e529ccfe9ddbb474eec0b8f1b6d047c80a44145&rid=giphy.webp",
    "https://media1.giphy.com/media/pG5zDvKjxisAYLjsx7/giphy.webp?cid=790b76115e529ccfe9ddbb474eec0b8f1b6d047c80a44145&rid=giphy.webp",
    "https://media0.giphy.com/media/oy3KWBNjxG6YST6pak/giphy.webp?cid=790b761106cb7ff9576e18a685aea8625be5d5bb3ba23fd5&rid=giphy.webp",
    "https://media3.giphy.com/media/3o6gb27m9SE4PPJyFy/giphy.webp?cid=790b761106cb7ff9576e18a685aea8625be5d5bb3ba23fd5&rid=giphy.webp",
    "https://media2.giphy.com/media/fxgVuoKyZwEOudRXuj/giphy.webp?cid=790b7611ae2c7c12301514ba1e872613d012a7a81ad103ee&rid=giphy.webp"];
    let random = Math.floor(Math.random() * wrong.length);

        return(
            <div>
                <img className= "wrongPic picture" src={wrong[random]}></img>
                <h3>Wrong :(</h3>
            </div>
        );
    }


}

export default Wrong