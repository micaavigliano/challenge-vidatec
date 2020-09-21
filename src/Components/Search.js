import React, { useState }from 'react';
//importo componentes desde material UI
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
//importo estilos de material UI para poder estilar el search box
import { makeStyles } from '@material-ui/core/styles';
//importo constantes donde guardo la API key y URLS
import { SEARCH_API, API_KEY } from '../const';

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
    }
}))

const Search = () => {
    const classes = useStyles(); //importo la función de estilos de material UI para poder implementarla en mis componentes
    const [query, setQuery] = useState("");
    
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);

        fetch(`${SEARCH_API}${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className={classes.container}>
            <InputBase 
                placeholder="Search a movie"
                inputProps={{ 'aria-label': 'Search a movie' }}
                value={query}
                onChange={onChange}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                type="search"
            />
            <IconButton orientation="vertical" className={classes.iconButton}>
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default Search;