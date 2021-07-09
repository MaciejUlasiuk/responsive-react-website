import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../images/img-2.jpg'
import img2 from '../images/img-9.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import img8 from '../images/img-8.jpg'
function Cards() {
  return (
    <div className='cards'>
      <h1>Sprawdz te piekne miejsca!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img2}
              text='Podziwiaj wodospady w  lasach deszczowych Amazonii'
              label='Przygoda'
              path='/services'
            />
            <CardItem
              src={img1}
              text='Podrozuj po wyspach Bali!'
              label='Luksus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img3}
              text='Zegluj po morzu Atlantyckim zwiedzajac nieznane wody..'
              label='Przygoda'
              path='/services'
            />
            <CardItem
              src={img4}
              text='Graj w pilke nozna na szczycie gor himalajskich!'
              label='Przygoda'
              path='/products'
            />
            <CardItem
              src={img8}
              text='Zwiedzaj pustynie Sahare jezdzac na wielbladzie!'
              label='extremalna przygoda'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
