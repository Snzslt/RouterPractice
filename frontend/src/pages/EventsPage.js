import { json, defer, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";


import EventsList from "../components/EventsList";

function EventsPage() {
  const {events} = useLoaderData();

   return(
     <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
     <Await resolve={events}>
     {(loadedEvents) => <EventsList events={loadedEvents}/>}
     </Await>
     </Suspense>
     )
//const events = data.events;
  
//   if (data.isError) {
//     return <p>{data.message}</p>;
//   }
//
//return (
//  <>
//   <EventsList events={events} />
// </>
//);
}

export default EventsPage;

async function loadEvents(){
    //we can not use react hooks in loaders
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      //setError("Fetching events failed.");
      //return { isError: true, message: "Could not fetch events." };
      //throw  { message: 'Could not fetch events'};
      //throw new Response(JSON. stringify({message: 'Could not fetch events.'}),
      //{
          //status: 500,
      //});
      return json(
          {message: 'Could not fetch events.'},
          {
              status:500,
          }
      );
    } else {
      const resData = await response.json();
      return resData.events;
      //return resposne;
      
    }
}
export function loader() {
 return defer({
   events: loadEvents(),
 })
}
