import { Fragment } from 'react';
import { people } from './data.js';
import { getImageUrl } from './utils.js';

function Items(person) {
  return (
    <Fragment key={person.id}>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    </Fragment>
  );
}

function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    Items(person)
  );
  return <ul>{listItems}</ul>;
}

export default List;