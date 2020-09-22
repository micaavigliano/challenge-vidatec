import React, { useState, useEffect } from 'react';
//importo componentes desde Material UI para crear la card
import { Card, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GET_DETAILS, API_KEY  } from '../const';
import { useParams } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: "70%",
        display: "flex",
        flexDirection: "row",
        marginLeft: "15%",
        marginTop: "10%"
    },
    media: {
        maxWidth: 400,
        height: 500,
    },
    noPhoto: {
        height: 500,
        maxWidth: 400,
        backgroundColor: "grey"
    }
})

const MoviesCard = () => {
    const classes = useStyles();
    const [movie, setMovie] = useState([]); //hook para guardar la info sobre la película en la nueva llamada
    const {id} = useParams(); // uso setParams para poder relacionar el ID de la película con la nueva información a recibir por la api

    useEffect(() => {
        fetchData()
    }, []) // seteo el estado setMovie para guardar la info recibida por la API

    //Llamo a la api y obtengo la información sobre la película y al final de la URL le paso el ID para relacionar la película con la información
    const fetchData = async() => {
        const data = await fetch(`${GET_DETAILS}${id}${API_KEY}&language=en-US/${id}`);
        const movies = await data.json()
        console.log(movies)
        setMovie(movies)
    }

    return (
        /*creo un componente Card de material UI para poder mostrar la info en el FE*/
        <main>
            <Card className={classes.root}>
            {movie.poster_path ? (
                <CardMedia
                    className={classes.media}
                    component="img"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`}
                />
            ) : (
                <div className={classes.noPhoto}><p>No photo</p></div>
            )
            }
            <CardContent>
                <h3>Title: {movie.title}</h3>
                <p>Description: {movie.overview}</p>
                <h5>Release date: {movie.release_date}</h5>
            </CardContent>
        </Card>
        </main>
    )
}

export default MoviesCard;