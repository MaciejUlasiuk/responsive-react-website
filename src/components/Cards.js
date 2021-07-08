import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Sprawdz te piekne miejsca!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Podziwiaj wodospady w  lasach deszczowych Amazonii'
              label='Przygoda'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Podrozuj po wyspach Bali!'
              label='Luksus'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Zegluj po morzu Atlantyckim zwiedzajac nieznane wody..'
              label='Przygoda'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Graj w pilke nozna na szczycie gor himalajskich!'
              label='Przygoda'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
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
