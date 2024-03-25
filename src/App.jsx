import MaxPhoto from './components/maxPhoto.jsx'
import PhotoList from './components/photoList.jsx'
import SearchBar from './components/searchBar.jsx'

import{ useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('')
  const [categoria, serCategoria ] = useState('');
  const fetchData = async ({ query, categoria }) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
      },
    })
    console.log(response)
  }

  useEffect(() => {
    fetchData(query, categoria);
  }, [])

  return (
    <div className='container'>
      <SearchBar/>
      <PhotoList/>
      <MaxPhoto/>
    </div>
  )
}

export default App
