import React, { useState }from 'react';
//importo componentes desde material UI
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
//importo estilos de material UI para poder estilar el search box
import { makeStyles } from '@material-ui/core/styles';
//importo constantes donde guardo la API key y URLS
import { SEARCH_API, API_KEY } from '../const';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '40%',
        margin: theme.spacing(10),
        left: '25%',
        border: '2px solid black'
    },
    inputRoot: {
        marginLeft: theme.spacing(1),
        flex: 1,
        width: '93%',
    },
    iconButton: {
        padding: 10,
    },
    moviesLink: {
        margin: 10,
        '&focus': {
            outline: "2px solid green",
        }
    },
    title: {
        width: "40%",
        marginLeft: "30%"
    }
}))

const Search = () => {
    const classes = useStyles(); //importo la función de estilos de material UI para poder implementarla en mis componentes
    const [query, setQuery] = useState(""); //para almacenar los datos de la API
    const [matches, setMatches] = useState([]) //estado inicial y acá se van an a almacenar los resultados de la búsqueda y es lo que se va a devolver en el FE
    
    const onChange = (e) => {
        e.preventDefault();
        //setQuery(e.target.value);
        if (e.target.value.length) {
            setQuery(e.target.value);
        } 
        //se almacena en el estado de los datos de la api el valor de cada targen ingresado por el usuario y el 'e.target.value' es lo que luego irá en la query como parámetro para que haya coincidencia en la búsqueda y se pueda hacer la llamada a la API

        //el fetch en este caso va adentro del onchange porque se va a realizar el llamado a la api cada vez que el usuario escriba y haya coincidencias, no cuando se inicializa el componente. Por eso mismo no use useEffect
        fetch(`${SEARCH_API}${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMatches(data.results)
            })
    }

    return (
        <main>
            <div className={classes.title}>
                <h1>Buscador de películas</h1>
                <p>¡Escriba el nombre de la película que quiera ver y conozca toda la información sobre ella!</p>
            </div>
            <div className={classes.container}>
                <InputBase 
                    placeholder="Search a movie"
                    inputProps={{ 'aria-label': 'Search a movie' }}
                    onChange={onChange}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    type="text"
                    minlength="3"
                />
                <IconButton 
                    orientation="vertical" 
                    className={classes.iconButton}
                    value="submit"
                    type="submit"
                    >
                    <SearchIcon />
                </IconButton>
            </div>

            {
                matches?.length >= 3 && (
                    <div className="results">
                        {matches.map(movie => (
                                <Link to={`/${movie.id}`} className={classes.moviesLink}>
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                </Link>
                        ))}
                    </div>
                )
            }
        </main>
    )
}

export default Search;