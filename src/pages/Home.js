import React from 'react';

import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';

import Cards from '../components/cards';
import Card1 from '../assets/img/robert-anasch-pzdl6P4Lk60-unsplash.jpg';
import Card2 from '../assets/img/marek-levak-1WkqJ1jG4Ts-unsplash.jpg';
import Card3 from '../assets/img/sylvanus-urban-XVYz_QeiEBw-unsplash.jpg';

import '../assets/css/style.css'

function Home() {

  var data = [{price: "$1,00", image: Card1, amount: 20 },{price: "$1,00", image: Card2, amount: 20 },{price: "$1,00", image: Card3, amount: 20 },{price: "$1,00", image: Card1, amount: 20 },{price: "$1,00", image: Card2, amount: 20 },{price: "$1,00", image: Card3, amount: 20 }]

  return (
    <div className="Home">
      <Header/>
       <Banner/>
       <h1 className="titleHome">Shop Now!!</h1>
       <div className="cardsBox">
          {data.map((val, i) => (
            <Cards key={i} image={val.image} price={val.price} amount={val.amount}/>
            ))
          }
      </div>
      <Footer/>
    </div>
  );

}

export default Home;
