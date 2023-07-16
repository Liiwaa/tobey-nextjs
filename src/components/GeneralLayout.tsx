import { Box, Typography } from '@mui/material';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

function Page({ title, children }: PageProps) {
  return (
    <Box sx={{ margin: '1rem' }}>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        {title}
      </Typography>
      <Box
        sx={{
          border: '1px solid #ccc',
          padding: '1rem',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Page;
