import React, { Component } from 'react';

class Right extends Component{

    render(){

    let right = ["https://media1.giphy.com/media/eIsMLxLftsAWT59u78/giphy.gif?cid=790b7611bcdb45519f2462ca6adbc3599d942533474634f4&rid=giphy.gif",
     "https://i.giphy.com/media/MeIucAjPKoA120R7sN/giphy.webp", "https://media1.giphy.com/media/YTbZzCkRQCEJa/giphy.gif?cid=790b76116e73aa789da72c5ba3bbe7e4ab13edda163d0fb8&rid=giphy.gif",
    "https://media1.giphy.com/media/muHlnG1WU9YfS/200w.webp?cid=790b7611cad2f318529a4240da62509ff0c938df7acbf846&rid=200w.webp", 
    "https://media0.giphy.com/media/l41lS0IgRIFkAuA5G/giphy.webp?cid=790b7611d0ec436eb35a85671bfb481a85c56116dd6fd09e&rid=giphy.webp",
    "https://media1.giphy.com/media/xT5LMHxhOfscxPfIfm/200.webp?cid=790b7611cad2f318529a4240da62509ff0c938df7acbf846&rid=200.webp", 
    "https://media1.giphy.com/media/g9582DNuQppxC/200.webp?cid=790b76117ad8d70d07f809fd2ec0a13b3342e87af31f07a5&rid=200.webp",
    "https://media1.giphy.com/media/3oz8xAFtqoOUUrsh7W/200.webp?cid=790b76117ad8d70d07f809fd2ec0a13b3342e87af31f07a5&rid=200.webp",
    "https://media3.giphy.com/media/qjfeT5XdAirCg/200.webp?cid=790b76117ad8d70d07f809fd2ec0a13b3342e87af31f07a5&rid=200.webp",
    "https://media1.giphy.com/media/mPIA4KZVXv0ty/200.webp?cid=790b76117ad8d70d07f809fd2ec0a13b3342e87af31f07a5&rid=200.webp",
    "https://media.tenor.com/images/b28e699b2c0df03fc05d017cf4846d5f/tenor.gif", "https://media.tenor.com/images/edaa647085ac1c3982fc5ac43d77fbb6/tenor.gif",
    "https://media3.giphy.com/media/d31w24psGYeekCZy/200.webp?cid=790b76117ad8d70d07f809fd2ec0a13b3342e87af31f07a5&rid=200.webp",
    "https://media3.giphy.com/media/6nuiJjOOQBBn2/giphy.webp?cid=790b76114d6f0d8a7e3bc8e54e898565dbad9c98f158b0f5&rid=giphy.webp",
    "https://media1.giphy.com/media/XreQmk7ETCak0/200.webp?cid=790b76114d6f0d8a7e3bc8e54e898565dbad9c98f158b0f5&rid=200.webp",
    "https://media3.giphy.com/media/1xNDVX4DV6B5vo6unw/giphy.webp?cid=790b7611631f69f4715c4836baf01da4e42b5c743d87c44a&rid=giphy.webp",
    "https://media3.giphy.com/media/8P1wfpFs14vDRZJnJ7/200.webp?cid=790b7611631f69f4715c4836baf01da4e42b5c743d87c44a&rid=200.webp",
    "https://media2.giphy.com/media/h4ke3VIEf1ib5WyHvQ/200.webp?cid=790b761142bb0197840fbd3bd5c92feb11f85994c76084ac&rid=200.webp", 
    "https://media2.giphy.com/media/2tOqM1jLQCA6J7uKRv/giphy.webp?cid=790b76119b3e55b0da77254edbc3ddd13e3895ad67fdc23b&rid=giphy.webp",
    "https://media0.giphy.com/media/2lQCBjuFMLCOvXno4l/giphy.webp?cid=790b761108944ee82ced6ae3689c8261932ef2f21b2ae23d&rid=giphy.webp",
    "https://media.giphy.com/media/RgfGmnVvt8Pfy/giphy.gif", "https://media1.giphy.com/media/l0HTYUmU67pLWv1a8/200.webp?cid=790b7611b32e9bc74e8beb1f6597c68732105124f23e45d0&rid=200.webp",
    "https://media1.giphy.com/media/yJFeycRK2DB4c/200.webp?cid=790b7611b32e9bc74e8beb1f6597c68732105124f23e45d0&rid=200.webp",
    "https://media3.giphy.com/media/3oriOfixsKjISS9kR2/giphy.webp?cid=790b7611b32e9bc74e8beb1f6597c68732105124f23e45d0&rid=giphy.webp",
    "https://media2.giphy.com/media/qPcX2mzk3NmjC/200.webp?cid=790b7611f8a34f4e9e206e7ff11ed676ea0e75a72fd66160&rid=200.webp", 
    "https://media1.giphy.com/media/kEKcOWl8RMLde/giphy.webp?cid=790b76118b22be17a543468a13eb28d0898021abdac22ff5&rid=giphy.webp", 
    "https://media3.giphy.com/media/mIZ9rPeMKefm0/giphy.webp?cid=790b76118b22be17a543468a13eb28d0898021abdac22ff5&rid=giphy.webp",
    "https://media1.giphy.com/media/3oz8xH46dD1DSx3vNK/giphy.webp?cid=790b76115c42edca1f04d15ce50b8e16dbebe4b262f74d89&rid=giphy.webp", 
    "https://media2.giphy.com/media/6nuiJjOOQBBn2/giphy.webp?cid=790b76115c42edca1f04d15ce50b8e16dbebe4b262f74d89&rid=giphy.webp"];
    let random = Math.floor(Math.random() * right.length);

        return(
            <div>
                <img className= "rightPic picture" src={right[random]}></img>
                <h3>Correct :)</h3>
            </div>
        );
    }


}

export default Right