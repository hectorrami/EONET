import { useState, useEffect } from 'react'
import Map from './components/Map'
import Load from './components/Load'
import NavBar from './components/NavBar'

function App() {

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <NavBar />
      {loading ? <Load /> : <Map eventData={eventData} />}
    </div>
  );
}

export default App;
