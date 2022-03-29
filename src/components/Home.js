import {
    Grid,
    Typography
} from '@material-ui/core'
import React, {
    useEffect,
    useState
} from 'react'
import Movie from './Movie'

import "./home.css"
import Loading from './Loading'

const Home = () => {
    const [movie, setMovie] = useState([])
    const [text, setText] = useState('Batman')
    const [load, setLoading] = useState(false)
    const key = '3e65e010'
    const url = `http://www.omdbapi.com/?i=tt3896198&s=${text}&apikey=3e65e010`
    const uri = 'https://www.omdb.com/?s=Batman&apikey=3e65e010'

    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const FetchMovies = (text) => {
        // setLoading(true)

        fetch(url, {
            method: 'GET'
        }).then((data) => {


            return data.json()
        }).then((res) => {


            if (res.Search) {
                setMovie(res.Search)
            }
            //setLoading(false)   
        })

    }


    useEffect(() => {

        FetchMovies(text)

    }, [text])

    return ( <div className = 'container' >
        <div className = 'search' >
        <label > Search < /label> <input type = "text"
        value = {
            text
        }
        onChange = {
            changeHandler
        }
        />


        </div>

        {
            /* {load ?  <Loading /> : } */ } <
        Movie movie = {
            movie
        }
        /> 


        <
        /div>
    )
}

export default Home