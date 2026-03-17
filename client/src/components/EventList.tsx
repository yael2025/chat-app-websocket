import { PMEvent } from "../types"
import EventItem from "./EventItem.tsx"

interface EventListProps {
    events : PMEvent[]
}


const EventList = ({events}: EventListProps) => {
    console.log(events)
    return <>
        {events?.map(event => {
            return <EventItem event={event}/>
        })}
    </>

}

export default EventList