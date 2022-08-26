import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TableTemplate from '../components/TableTemplate';
import { getUserPost, clearUserPostList } from "../features/user-post/userPostSlice"
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import loadingGif from "../assets/loading.gif"
import { Box } from '@mui/system';

const Users = () => {
  const dispatch = useDispatch();
  const { userPostList, loading } = useSelector((state) => state.userPost);

  useEffect(() => {
    dispatch(getUserPost());
    return () => {
      dispatch(clearUserPostList());
    };
  }, [dispatch]);

  const name = "Users"

  const exampleData = userPostList.map((a)=>{
    const {id, Post, UserName, Image, Job} = a
    return {id, UserName, Image, Job, Post}
  })

  return (
    <>
      {loading && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={loadingGif} alt="gif" width="90%" height="800px" />
        </Box>
      )}
      {!loading &&
        <>
          <Sidebar />
          <Header name={name} />
          <TableTemplate className="table" exampleData={exampleData} />
        </>
      }
    </>
  )
}

export default Users