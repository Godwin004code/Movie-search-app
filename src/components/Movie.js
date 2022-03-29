import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import "./movie.css"

const Movie = ({movie}) => {
    console.log(movie)
  return (
    <div className='movie__grid' >
      {  movie.map((item) => {
                console.log(item)
                const {Title, imdbID, Poster} = item
                return (
                    <Grid container key={imdbID}>
                        <div className='movie'>
                            <div className='title'><Typography variant='h6'>{Title}</Typography></div>
                        <img style={{borderRadius: '12px'}} src={Poster} />
                        </div>
                    </Grid>
                )   
            })
        }
    </div>
  )
}

export default Movie