import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box className="w-full h-full items-center justify-center">
      <CircularProgress disableShrink />
    </Box>
  );
};

export default Loading;
