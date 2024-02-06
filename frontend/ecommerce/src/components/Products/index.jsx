import React from 'react';
import {
    Box,
    Button,
    Container,
    CardMedia,
    Grid,
    styled,
    Typography,
    InputAdornment,
    TextField,
} from "@mui/material";
import Card from '../Card';

const Products = () => {
  return (
    <Box sx={{
        padding:"10px 0px",
        mt:2,
        mb:4
    }}>
        <Container>
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

export default Products