import React, { useState } from 'react';
import './App.css';

import ActivityList from './ActivityList';

const ACTIVITIES = [
  {
    id: 0,
    title: 'Entertainment',
  },
  {
    id: 1,
    title: 'Work',
  },
  {
    id: 2,
    title: 'Eating',
  },
  {
    id: 3,
    title: 'Sleeping',
  },
  {
    id: 4,
    title: 'Blah',
  },
  {
    id: 5,
    title: 'Entertainment',
  },
  {
    id: 6,
    title: 'Work',
  },
  {
    id: 7,
    title: 'Eating',
  },
  {
    id: 8,
    title: 'Sleeping',
  },
  {
    id: 9,
    title: 'Blah',
  },
];


/**
 * Returns whether or not the short string is a fuzzy match
 * with the long string.
 *
 * A word fuzzy matches with another word if all of the
 * letters in the word appear in the same order in the other word.
 *
 * @param {string} shortStr the short string
 * @param {string} longStr the long string
 * @return {boolean} whether or not the short string is a
 *    fuzzy match with the long string
 */
function fuzzyMatch(shortStr, longStr) {
  let n = -1;
  for (let i = 0; i < shortStr.length; i++) {
    const curLetter = shortStr[i];
    n = longStr.toLowerCase().indexOf(curLetter, n + 1);
    if (n === -1) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a subset of the array of objects passed in whose .title property
 * fuzzy match with the given comparison string.
 *
 * @param {string} comparisonString the string to match
 * @param {array} itemsToSearch the objects with .title properties to match
 *    with the comparisonString
 * @return {array} a subset of the itemsToSearch that match the comparisonString
 */
function fuzzySearch(comparisonString, itemsToSearch) {
  const lowerCompStr = comparisonString.toLowerCase();
  return itemsToSearch.filter((item) => fuzzyMatch(lowerCompStr, item.title));
}

function App() {
  const [allActivities] = useState(ACTIVITIES);
  const [visibleActivities, setVisibleActivities] = useState(allActivities);
  const [selectedActivity, setSelectedActivity] = useState(null);

  function filterResults(event) {
    const inputText = event.target.value;
    const filteredActivities = fuzzySearch(inputText, allActivities);
    setVisibleActivities(filteredActivities);
  }

  function selectActivity(id) {
    if (selectedActivity === id) {
      setSelectedActivity(null);
    } else {
      setSelectedActivity(id);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tracker of Time</h1>
      </header>

      <input type="text" placeholder="Search for an activity..." onChange={filterResults}></input>

      <br/>

      <ActivityList activities={visibleActivities} selectActivity={selectActivity} selectedActivity={selectedActivity}/>

      <br/>

      <button onClick={() => console.log('Creating new activity...')}>New Activity</button>

      <br/>

      <button onClick={() => console.log('Starting activity...')}>Start</button>
    </div>
  );
}

export default App;
