import MaxPhoto from './components/maxPhoto.jsx'
import PhotoList from './components/photoList.jsx'
import SearchBar from './components/searchBar.jsx'

import{ useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('')
  const [categoria, serCategoria ] = useState('');
  const [photos, setPhotos] = useState([])
  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 10,
      },
    })
    setPhotos(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchData(query, categoria);
  }, [])

  return (
    <div className='container'>
      <SearchBar/>
      <PhotoList photos={photos}/>
      <MaxPhoto/>
    </div>
  )
}

export default App
