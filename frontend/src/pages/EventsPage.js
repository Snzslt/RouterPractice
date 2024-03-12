import { json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();
//   if (data.isError) {
//     return <p>{data.message}</p>;
//   }
 //
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
export async function loader() {
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
