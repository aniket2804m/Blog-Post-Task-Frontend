
import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={5}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;