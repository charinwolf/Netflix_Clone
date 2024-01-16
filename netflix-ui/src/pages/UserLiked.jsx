import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth } from "../utils/firebase-config";
import Navbar from '../components/Navbar'; 
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import { fetchMovies, getGenres } from '../store';
import styled from 'styled-components';
import SelectGenre from '../components/SelectGenre';

const UserLiked = () => {
    const [isScrolled, setIsScrolled] = useState(false);
     // eslint-disable-next-line
    const navigate = useNavigate();
    const genresLoaded = useSelector(( state )  => state.netflix.genresLoaded );
    const movies = useSelector((state) => state.netflix.movies)
    const genres = useSelector((state) => state.netflix.genres)
    const [email, setEmail] = useState(undefined);
    const dispatch = useDispatch();


    
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if(currentUser) setEmail(currentUser.email);
      else navigate("/login");
    });

    useEffect(() => {
        if( email ) {
            dispatch(getUserLikedMovies(email))
        }
        
    }, []);

    useEffect(() => {
        if( genresLoaded ) {
         dispatch(fetchMovies({ type: 'all' }));
        }
    }, [genresLoaded]); 

    window.scroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
            { movies.map(( movie, index ) => {
                return (
                    <Card 
                        movieData={ movie }
                        index={index}
                        key={movie.id}
                        isLiked={true}
                        />
                );
            })}
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
    .content {
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1 {
            margin-left: 3rem;
        }
        .grid {
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`

export default UserLiked
