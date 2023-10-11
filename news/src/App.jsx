import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [news, setNews] = useState([])
  function clickToGet() {
    axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-10-06&to=2023-10-06&sortBy=popularity&apiKey=7941adb2481d42c083248c748116ef1b')
    .then((response) => {
      setNews(response.data.articles)
    })
  }

  return (
    <>
    <h1>News Web</h1>
    <button onClick={clickToGet} >Click to Get News</button>
      {
        news.map((news, index) => (
          <div>
            <h2 className='bg-gray-700 rounded mt-2 font-bold text-white text-lg '>{news.title} </h2>
            <p>{news.content} </p>
            <img src={news.urlToImage} className='rounded ' alt="" />
          </div>

        ))
      }


    </>
  )
}

export default App
