

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const PostTable = ({ posts, handleDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>

        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {posts.map((post) => (
            <TableRow key={post._id}>
              <TableCell>{post.title}</TableCell>

              <TableCell>{post.author}</TableCell>

              <TableCell>{post.category}</TableCell>

              <TableCell>{post.status}</TableCell>

              <TableCell>
    {`${post.created?.date}
    ${post.created?.month}
    ${post.created?.year}`}
  </TableCell>

              <TableCell>

                <Button
                  component={Link}
                  to={`/view/${post._id}`}
                >
                  View
                </Button>

                <Button
                  component={Link}
                  to={`/edit/${post._id}`}
                >
                  Edit
                </Button>

                <Button
                  color="error"
                  onClick={() => handleDelete(post._id)}
                >
                  Delete
                </Button>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};

export default PostTable;