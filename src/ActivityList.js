import React from 'react';
import './ActivityList.css';

function ActivityList(props) {
  let listItems = <li key='DNE'>No matches found</li>;
  if (props.activities.length > 0) {
    listItems = props.activities.map((activity) => {
      return (
        <li
          key={activity.id}
          onClick={() => props.selectActivity(activity.id)}
          className={props.selectedActivity === activity.id ? 'selected' : ''}
        >
          {activity.title}
        </li>
      );
    });
  }

  return (
    <div className="ActivityList">
      <ul>
        { listItems }
      </ul>
    </div>
  )
}

export default ActivityList;
