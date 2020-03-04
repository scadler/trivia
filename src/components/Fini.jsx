import React, { Component } from 'react';

class Fini extends Component{

    render(){
        return(
            <div>
                <h1>You win the game!</h1>
                <img src="https://media2.giphy.com/media/9xt1MUZqkneFiWrAAD/giphy.webp?cid=790b7611ab96899f7b5a6db0e6cdc7f104249ce58d093e1b&rid=giphy.webp"></img>
                <h1><a className= "link" onClick={()=> window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")} >Secret Suprise</a></h1>
            </div>
        );
    }
}

export default Fini