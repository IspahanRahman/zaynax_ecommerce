import {
    Box,
    Container,
    Grid,
    Button
} from "@mui/material";
import Card from '../Card';
import { useNavigate  } from "react-router-dom";

const Products = () => {
    const navigateTo  = useNavigate ();
    const routeChange = () =>{
      navigateTo('/add_product')
    }
  return (
    <Box sx={{
        padding:"10px 0px",
        mt:2,
        mb:4
    }}>
        <Container>
            <Button variant="contained" sx={{backgroundColor:"#fff",borderRadius:50,color:"black",mb:2,'&:hover':{backgroundColor:'#fff'}}} onClick={routeChange}>Add Product</Button>
            <Grid container spacing={2} direction={"row"}>
                <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>
                 <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>
                 <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>
                 <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>
                 <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>
                 <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>
                 <Grid item xs={6} sm={3} lg={2}>
                    <Card/>
                </Grid>

            </Grid>
        </Container>
    </Box>
  )
}

export default Products;