import { searchMovies } from "api";
import Movies from "components/Movies/Movies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FormMovies } from "./Movies.styled";


export default function MoviesSearchPages() {
    const [query, setQuery] = useState('');
    const [moviesSearch, setMoviesSearch] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('query')

    useEffect(() => {
        search && onClickSearch(search);
    }, [search]);

    function onClickSearch(search) {
        try {
            const response = searchMovies(search)
            response.then(data => {
                setMoviesSearch(data.results)
            });
        } catch (error){}
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({query:query})
    }

    const handleChange = e => {
        setQuery(e.target.value)
    }

    return (
        <main>
            <FormMovies
                onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={query} />
                <button onClick={()=> onClickSearch(query)}>Search</button>
            </FormMovies>
            {moviesSearch.length !== 0 && <Movies movies={moviesSearch} />}
    </main>
)

} 