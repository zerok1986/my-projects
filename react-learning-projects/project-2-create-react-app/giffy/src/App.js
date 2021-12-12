import { useEffect, useState } from 'react'
import './App.css'
import getGifs from './services/getGifs'
import Gif from './services/components/Gif'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'programming' }).then((gifs) => setGifs(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))}
      </section>
    </div>
  )
}
export default App
