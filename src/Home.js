import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="home-image"
          />

          <div className="home__row">
            <Product
              id="1"
              title="LG 164 cm (65 inches) 4K Ultra HD Smart IPS LED TV 65UM7290PTD (Ceramic Black) (2020 Model)"
              price={1499.99}
              image="https://images-na.ssl-images-amazon.com/images/I/71SCFpCWGrL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="2"
              title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
              price={2499.90}
              image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY327_FMwebp_QL65_.jpg"
              rating={5}
            />
          </div>

          <div className="home__row">
            <Product
              id="3"
              title="Apple iPhone 11 Pro Max (256GB) - Midnight Green"
              price={(1200)}
              image="data:image/webp;base64,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"
              rating={4}
            />
            <Product
              id="4"
              title="Ching's Secret, Schezwan Chutney, 250 Grams(gm)"
              price={1.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81TiY3NVfQL._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="5"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
              price={999.99}
              image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id="6"
              title="Acer Predator X34 Pbmiphzx 34-inch UltraWide QHD Monitor with NVIDIA G-SYNC Technology (Black)"
              price={1400}
              image="https://images-na.ssl-images-amazon.com/images/I/612yBrnxozL._SL1400_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
