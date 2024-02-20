import { Outlet } from "react-router-dom";
import EventNavigation from '../components/EventsNavigation';

function EventRootLayout(){
    return(
        <>
        <EventNavigation />
        <Outlet />
        </>
    );
}
export default EventRootLayout;