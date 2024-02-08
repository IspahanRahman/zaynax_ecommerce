import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box } from '@mui/material';

const Cards = () => {

  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={"https://picsum.photos/200/300"}
                alt="green iguana"
                sx={{
                    padding:"10px"
                }}
            />
            <CardContent>
                <Typography gutterBottom component="div">
                    Camera
                </Typography>
                <Box>
                    <Typography sx={{fontSize:"18px",fontWeight:"500"}}>BDT 7,123</Typography>
                </Box>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Cards