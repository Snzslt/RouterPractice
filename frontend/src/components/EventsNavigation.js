import {NavLink} from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <a href="/events"
            className={({isActive}) => 
            isActive ? classes.active : undefined
            }
            end
            >All Events</a>
          </li>
          <li>
            <a
             className={({isActive}) => 
             isActive ? classes.active : undefined
             } href="/events/new">New Event</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
