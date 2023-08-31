import { Box, Typography } from '@mui/material';

interface PageProps {
  title: string;
  children: React.ReactNode;
}

function Page({ title, children }: PageProps) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box>
        {children}
      </Box>
    </Box>
  );
}

export default Page;
