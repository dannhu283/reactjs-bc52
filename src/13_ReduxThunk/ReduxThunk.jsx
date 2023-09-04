import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../redux/actions/postActions";
import { getPosts } from "../redux/slices/postSlice";

export default function ReduxThunk() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <div>
      <h1 className="text-center text-primary">ReduxThunk</h1>
      <ul>
        {posts.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
