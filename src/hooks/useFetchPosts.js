import { useEffect, useState } from "react";

import { getPosts } from "../services/postService";

const useFetchPosts = () => {

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  // FETCH POSTS
  const fetchPosts = async (currentPage = 1) => {
    try {
      setLoading(true);
      const { data } = await getPosts(currentPage);
      setPosts(data.posts || []);
      setTotalPages(data.pages || 1);
    } catch (err) {
      console.error("Failed to Fetch Posts", err);
    } finally {
      setLoading(false);
    }
  };


  // USE EFFECT
  useEffect(() => {
    fetchPosts(page);
  }, [page]);


  return {
    posts,
    loading,
    page,
    setPage,
    totalPages,
    fetchPosts,
    setPosts,
    setTotalPages,
  };
};

export default useFetchPosts;