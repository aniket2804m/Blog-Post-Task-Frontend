import { useState } from "react";
import "./Home.css"

import useFetchPosts from "../hooks/useFetchPosts";

import {
  Container,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import PostTable from "../components/PostTable";

import {
  deletePost,
  searchPosts,
} from "../services/postService";

import { toast } from "react-toastify";

import { CSVLink } from "react-csv";

import "./Home.css";

const Home = () => {

  const {
    posts,
    loading,
    fetchPosts,
    setPosts,
    setTotalPages,
  } = useFetchPosts();

  const [search, setSearch] = useState("");


  // DELETE
  const handleDelete = async (id) => {

    try {

      await deletePost(id);

      toast.success("Post Deleted");

      fetchPosts();

    } catch (error) {

      toast.error("Delete Failed");

      console.error(
        "Delete Failed",
        error
      );
    }
  };


  // SEARCH
  const handleSearch = async (e) => {

    const value = e.target.value;

    setSearch(value);

    try {

      if (value.trim() === "") {

        fetchPosts();

      } else {

        const { data } =
          await searchPosts(value);

        setPosts(data.posts || []);

        setTotalPages(data.pages || 1);
      }

    } catch (error) {

      toast.error("Search Failed");

      console.error(
        "Search Failed",
        error
      );
    }
  };


  // CSV HEADERS
  const headers = [
    { label: "Title", key: "title" },
    { label: "Author", key: "author" },
    { label: "Email", key: "email" },
    { label: "Category", key: "category" },
    { label: "Status", key: "status" },
  ];


  return (
    <>
      <Navbar />

      <Container className="home-container">

        {/* TOP CARD */}
        <div className="top-card">

          <div>

            <Typography className="main-title">
              Blog Post Manager
            </Typography>

            <Typography className="sub-title">
              Manage and organize your
              blog posts
            </Typography>

          </div>


          <div className="top-actions">

            {/* EXPORT CSV */}
            <CSVLink
              data={posts}
              headers={headers}
              filename={"blog-posts.csv"}
              className="csv-link"
            >
              <Button
                variant="outlined"
                className="export-btn"
              >
                Export CSV
              </Button>
            </CSVLink>


            <Button
              variant="contained"
              component={Link}
              to="/add"
              startIcon={<AddIcon />}
              className="add-btn"
            >
              Add Post
            </Button>

          </div>

        </div>


        {/* SEARCH BAR */}
        <div className="search-card">

          <TextField
            fullWidth
            placeholder="Search posts..."
            value={search}
            onChange={handleSearch}
            className="search-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

        </div>


        {/* TABLE */}
        <div className="table-wrapper">

          {loading ? (
            <Loader />
          ) : (
            <PostTable
              posts={posts}
              handleDelete={handleDelete}
            />
          )}

        </div>

      </Container>
    </>
  );
};

export default Home;