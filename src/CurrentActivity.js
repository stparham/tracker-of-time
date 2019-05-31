import React from 'react';
import './CurrentActivity.css';

function CurrentActivity(props) {
  function stopActivity() {
    console.log('Stopping activity...');
    props.history.push('/');
  }
  return (
    <div className="CurrentActivity">
      <h1>You are currently...</h1>
      <h2>{props.activity.title}</h2>
      <br/>

      <h2>Started at: 11:02</h2>

      <h2>Elapsed time: 0:09:10</h2>

      <br/>

      <button onClick={stopActivity}>Stop</button>
    </div>
  );
}

export default CurrentActivity;
