import React from 'react';
import './finish.module.css';

export default function Finish (props) {
  console.log('finish')
  return (<div className="finish">
    <div className=".finish-content">
      <p>Director:  shyki</p>
      <p>Level Disigner: bexon26</p>
      <p>Menu: Veleron</p>
      <p>Engine: shyki</p>
      <p>Enemies and level design: bexon26</p>
      <p>Bosses: shyki</p>
      <p>Level creation mechanic: shyki</p>
      <p>Made for <span className="rsschool">rsschool</span> 2021</p>      
    </div>
  </div>)
}