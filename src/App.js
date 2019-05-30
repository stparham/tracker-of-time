import React, { useState } from 'react';
import './App.css';

import ActivityList from './ActivityList';

import { fuzzySearch } from './fuzzySearchUtils';

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
    // if the currently selected id matches the passed in one, then deselect the activity
    // otherwise select the passed in one
    setSelectedActivity(selectedActivity === id ? null : id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tracker of Time</h1>
      </header>

      <input type="text" placeholder="Search for an activity..." onChange={filterResults}></input>

      <br/>

      <ActivityList
        activities={visibleActivities}
        selectActivity={selectActivity}
        selectedActivity={selectedActivity}
      />

      <br/>

      <button onClick={() => console.log('Creating new activity...')}>New Activity</button>

      <br/>

      <button onClick={() => console.log('Starting activity...')}>Start</button>
    </div>
  );
}

export default App;
