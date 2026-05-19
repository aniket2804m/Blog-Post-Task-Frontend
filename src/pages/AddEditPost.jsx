import { useEffect, useCallback } from "react";

import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Paper,
} from "@mui/material";

import { useForm } from "react-hook-form";

import {
  createPost,
  getSinglePost,
  updatePost,
} from "../services/postService";

import { toast } from "react-toastify";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import "./AddEditPost.css";

const AddEditPost = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  // FETCH SINGLE POST
  const fetchPost = useCallback(async () => {

    try {

      const { data } =
        await getSinglePost(id);

      reset(data.post);

    } catch (error) {

      toast.error(
        "Failed to Fetch Post"
      );

      console.error(
        "Failed to Fetch Post",
        error
      );
    }

  }, [id, reset]);


  // LOAD DATA FOR EDIT
  useEffect(() => {

    if (id) {
      fetchPost();
    }

  }, [id, fetchPost]);


  // FORM SUBMIT
  const onSubmit = async (formData) => {

    try {

      if (id) {

        await updatePost(
          id,
          formData
        );

        toast.success(
          "Post Updated Successfully"
        );

      } else {

        await createPost(formData);

        toast.success(
          "Post Created Successfully"
        );
      }

      navigate("/");

    } catch (error) {

      toast.error(
        "Something Went Wrong"
      );

      console.error(
        "Something Went Wrong",
        error
      );
    }
  };


  return (
    <div className="post-page">

      <Container
        maxWidth="md"
        className="post-container"
      >

        {/* TOP HEADER */}
        <div className="post-top-header">

          <div className="post-icon">
            ✍️
          </div>

          <Typography
            variant="h4"
            className="post-main-title"
          >
            {id
              ? "Edit Blog Post"
              : "Create New Post"}
          </Typography>

          <Typography className="post-subtitle">
            Fill in the details to
            publish your blog post
          </Typography>

        </div>


        {/* FORM CARD */}
        <Paper
          elevation={0}
          className="post-form-card"
        >

          <form
            onSubmit={handleSubmit(
              onSubmit
            )}
          >

            {/* SECTION */}
            <div className="form-section">

              <Typography className="section-heading">
                Basic Information
              </Typography>

              <Grid
                container
                spacing={3}
              >

                {/* TITLE */}
                <Grid
                  item
                  xs={12}
                  md={6}
                >

                  <TextField
                    label="Title"
                    fullWidth
                    placeholder="Enter post title"
                    className="custom-input"
                    {...register("title", {
                      required:
                        "Title is required",
                    })}
                    error={!!errors.title}
                    helperText={
                      errors.title?.message
                    }
                  />

                </Grid>


                {/* AUTHOR */}
                <Grid
                  item
                  xs={12}
                  md={6}
                >

                  <TextField
                    label="Author Name"
                    fullWidth
                    placeholder="Enter author name"
                    className="custom-input"
                    {...register("author", {
                      required:
                        "Author name is required",
                    })}
                    error={
                      !!errors.author
                    }
                    helperText={
                      errors.author
                        ?.message
                    }
                  />

                </Grid>


                {/* EMAIL */}
                <Grid item xs={12}>

                  <TextField
                    label="Email Address"
                    fullWidth
                    placeholder="author@example.com"
                    className="custom-input"
                    {...register("email", {
                      required:
                        "Email is required",
                      pattern: {
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "Invalid Email",
                      },
                    })}
                    error={!!errors.email}
                    helperText={
                      errors.email?.message
                    }
                  />

                </Grid>

              </Grid>

            </div>


            {/* SECTION */}
            <div className="form-section">

              <Typography className="section-heading">
                Classification
              </Typography>

              <Grid
                container
                spacing={3}
              >

                {/* CATEGORY */}
                <Grid
                  item
                  xs={12}
                  md={6}
                >

                  <TextField
                    label="Category"
                    fullWidth
                    className="custom-input"
                    {...register(
                      "category",
                      {
                        required:
                          "Category is required",
                      }
                    )}
                    error={
                      !!errors.category
                    }
                    helperText={
                      errors.category
                        ?.message
                    }
                  />

                </Grid>


                {/* STATUS */}
                <Grid
                  item
                  xs={12}
                  md={6}
                >

                  <TextField
                    select
                    label="Status"
                    fullWidth
                    defaultValue="Draft"
                    className="custom-input"
                    {...register("status")}
                  >

                    <MenuItem value="Published">
                      Published
                    </MenuItem>

                    <MenuItem value="Draft">
                      Draft
                    </MenuItem>

                  </TextField>

                </Grid>

              </Grid>

            </div>


            {/* SECTION */}
            <div className="form-section">

              <Typography className="section-heading">
                Content
              </Typography>

              <Grid
                container
                spacing={3}
              >

                {/* SHORT DESCRIPTION */}
                <Grid item xs={12}>

                  <TextField
                    label="Short Description"
                    fullWidth
                    multiline
                    rows={4}
                    placeholder="Brief summary of the post"
                    className="custom-input"
                    {...register(
                      "shortDescription",
                      {
                        required:
                          "Short description is required",
                      }
                    )}
                    error={
                      !!errors.shortDescription
                    }
                    helperText={
                      errors
                        .shortDescription
                        ?.message
                    }
                  />

                </Grid>


                {/* CONTENT */}
                <Grid item xs={12}>

                  <TextField
                    label="Post Content"
                    fullWidth
                    multiline
                    rows={8}
                    placeholder="Write your full blog post content here"
                    className="custom-input"
                    {...register(
                      "content",
                      {
                        required:
                          "Content is required",
                      }
                    )}
                    error={
                      !!errors.content
                    }
                    helperText={
                      errors.content
                        ?.message
                    }
                  />

                </Grid>

              </Grid>

            </div>


            {/* BUTTONS */}
            <div className="button-group">

              <Button
                variant="outlined"
                className="cancel-btn"
                onClick={() =>
                  navigate("/")
                }
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                className="publish-btn"
              >
                {id
                  ? "Update Post"
                  : "Publish Post"}
              </Button>

            </div>

          </form>

        </Paper>

      </Container>

    </div>
  );
};

export default AddEditPost;