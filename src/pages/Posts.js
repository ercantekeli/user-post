import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import TableTemplate from '../components/TableTemplate';
import { getUserPost, clearUserPostList } from "../features/user-post/userPostSlice"
import loadingGif from "../assets/loading.gif"
import { Box } from '@mui/system';
import "./PostsStyle.css"

const Posts = () => {
  const dispatch = useDispatch();
  const { userPostList, loading } = useSelector((state) => state.userPost);

  useEffect(() => {
    dispatch(getUserPost());
    return () => {
      dispatch(clearUserPostList());
    };
  }, [dispatch]);

  const name = "Posts"
  const exampleData = userPostList.map((a)=>{
    const {id, Post, UserName} = a
    return {id, Post, UserName}
  })

  return (
    <>
      {loading && (
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="90vh"
      >
        <img src={loadingGif} alt="gif" width="50%" height="400px" />
      </Box>
      )}
      {!loading &&
        <>
          <Sidebar />
          <Header name={name} />
          <TableTemplate className="table" exampleData={exampleData}/>
        </>
      }
    </>
  )
}

export default Posts