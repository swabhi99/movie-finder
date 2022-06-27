import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const [movie, setMovie] = useState({});
  const [error,setError] = useState({show:false,msg:''});
  const {id} = useParams();
  const fetchMovie = async()=>{
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();
    setMovie(data)
  }
  useEffect(()=>{
    fetchMovie()
  },[id])
  const {Poster:poster,Title:title,Plot:plot,Year:year} = movie
  return <section className='single-movie'>
      <img src={poster} alt={title}/>
       <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
       </div>
  </section>
}

export default SingleMovie
