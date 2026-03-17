import { useState,useRef, useEffect } from 'react'
import './App.css'
import axios from "axios"
import { PMEvent } from './types'
import EventList from './components/EventList'
import { useDebounce } from './hooks/useDebounce'

function App() {

  const apiUrl : string = "/api/public-search"
  const [events,setEvents] = useState<PMEvent[]>([])
  
  const [search, setSearch] = useState<string>('')

  const debouncedSearch = useDebounce(search, 200)

  useEffect(()=>{
    if(debouncedSearch.length>0)
        {
          searchMarkets(debouncedSearch)
      }
  },[debouncedSearch])

  async function searchMarkets(query:string): Promise<void> {
      const results = await axios.get(`${apiUrl}?q=${query}`)
      setEvents(results.data.events)
  }

  return (
    <>
        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}/>
        {/* <MarketList/> */}
        <EventList events={events}/>
    </>
  )
}

export default App
