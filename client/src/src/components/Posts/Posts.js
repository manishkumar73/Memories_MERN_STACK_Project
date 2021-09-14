import React from 'react'

import Post from './Post/Post';

import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

 

export const Posts = ({ setCurrentId}) => {
   const {posts, isLoading} = useSelector((state) => state.posts)
     const classes = useStyles();

    if(!posts.length && !isLoading) return 'No Posts'
    

    return (
            isLoading ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>

                  
                  <Post post={post} setCurrentId={setCurrentId}  />
                </Grid>
              ))}
            </Grid>
            ))
}
