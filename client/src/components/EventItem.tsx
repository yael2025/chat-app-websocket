import { PMEvent } from "../types"
import {Collapse} from 'react-collapse';
import {useState} from "react"
import MarketList from "./MarketList";

interface EventItemProps {
    event : PMEvent
}


const EventItem = ({event}: EventItemProps) => {
    console.log(event)
    const [isCollapsed,setIsCollapsed] = useState<boolean>(false)
    return <>
        <h3 style={{cursor: "pointer"}} onClick={() => setIsCollapsed(!isCollapsed)}> {event.title} </h3>
        <Collapse isOpened={isCollapsed}>
                {/* <h4> {event.description} </h4>
                <h4> {event.startDate} </h4>
                <h4> {event.endDate} </h4>
                <img src={event.image}/> */}
                <MarketList markets={event.markets}/>
        </Collapse>
    </>

}

export default EventItem