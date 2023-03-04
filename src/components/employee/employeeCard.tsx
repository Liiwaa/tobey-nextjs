import { Box, Grid, Typography, Card, Link as MUILink } from '@mui/material';

interface EmployeeCardProps {
employeeName: string
onClick: (employeeName: string) => void;
}

const EmployeeCard = ({ employeeName, onClick }: EmployeeCardProps) => {
	return (
			<Grid item xs={12} sm={6} md={3}>
		<MUILink href={`/employee/${employeeName}`} variant="body2" sx={{ textDecoration: 'none'}}>

				<Card className="secondary-card">
					<Box key={employeeName} onClick={()=> onClick(employeeName)}
						sx={{ cursor: 'pointer' }}>
						<Typography variant="body1">{employeeName}</Typography>
					</Box>
				</Card>
		</MUILink>

			</Grid>
		
	);
};

export default EmployeeCard;