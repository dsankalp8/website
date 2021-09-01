import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>REMOTE WORK IS NEW NORMAL</h1>
      <p>Our warehouse drones help you automate cycle counts of inventory.</p><p>Takes only 1 hour to scan an est. 200-400 pallet positions per drone (includes recharge time).</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='New Era of Automation'
              label='Detenction with real time data'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Just Set And Deploy'
              label='Its never been so easy'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.gif'
              text='Set the Sail'
              label='Solve the Mystery'
              path='/services'
            />
            <CardItem
              src='images\img-7.jpg'
              text='Object Detection'
              label='Hight Accruate Trained Models'
              path='/products'
            />
            <CardItem
              src='images\img-10).gif'
              text='Secure and Easy '
              label='Unbeatable'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
