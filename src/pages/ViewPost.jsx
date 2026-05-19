import { useEffect, useState } from "react";

import {
  Container,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  CircularProgress,
  Avatar,
  Divider,
} from "@mui/material";

import {
  Person,
  Category,
  Article,
} from "@mui/icons-material";

import { useParams } from "react-router-dom";

import { getSinglePost } from "../services/postService";

import { toast } from "react-toastify";

const ViewPost = () => {

  const { id } = useParams();

  const [post, setPost] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const { data } = await getSinglePost(id);
        setPost(data.post);
      } catch (error) {
        toast.error("Failed to Load Post");
        console.error("Failed to Load Post", error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  // LOADING
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        mt={10}
      >
        <CircularProgress />
      </Box>
    );
  }


  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 5,
        mb: 5,
      }}
    >

      <Card
        elevation={4}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
        }}
      >

        {/* HEADER */}
        <Box
          sx={{
            background:
              "linear-gradient(135deg, #7b2ff7, #f107a3)",
            color: "#fff",
            p: 4,
          }}
        >

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {post.title}
          </Typography>

          <Box
            display="flex"
            gap={2}
            flexWrap="wrap"
          >

            <Chip
              icon={<Person />}
              label={post.author}
              sx={{
                background: "#ffffff22",
                color: "#fff",
              }}
            />

            <Chip
              icon={<Category />}
              label={post.category}
              sx={{
                background: "#ffffff22",
                color: "#fff",
              }}
            />

            <Chip
              icon={<Article />}
              label={post.status}
              sx={{
                background:
                  post.status === "Published"
                    ? "#4caf50"
                    : "#ff9800",
                color: "#fff",
              }}
            />

          </Box>

        </Box>


        {/* CONTENT */}
        <CardContent sx={{ p: 4 }}>

          {/* AUTHOR SECTION */}
          <Box
            display="flex"
            alignItems="center"
            gap={2}
            mb={3}
          >

            <Avatar
              sx={{
                width: 60,
                height: 60,
                bgcolor: "#7b2ff7",
              }}
            >
              {post.author?.charAt(0)}
            </Avatar>

            <Box>
              <Typography variant="h6">
                {post.author}
              </Typography>

              <Typography color="text.secondary">
                {post.email}
              </Typography>
            </Box>

          </Box>

          <Divider sx={{ mb: 3 }} />


          {/* SHORT DESCRIPTION */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
            }}
          >
            Short Description
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            {post.shortDescription}
          </Typography>


          {/* CONTENT */}
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: "bold",
            }}
          >
            Blog Content
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 2,
              whiteSpace: "pre-line",
            }}
          >
            {post.content}
          </Typography>

        </CardContent>

      </Card>

    </Container>
  );
};

export default ViewPost;