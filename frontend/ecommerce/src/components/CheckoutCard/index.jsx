import {
    Box,
    styled,
    Grid,
    Container,
    CardMedia,
    Typography,
    IconButton,
    Button,
    TextField
} from "@mui/material";
import Cards from "../Card";
import DeleteIcon from '@mui/icons-material/Delete';

const CheckoutCard = () => {
    const MainWrapper = styled(Box)(() => ({
        padding:"10px 0px",
        mt:4,
    }));

    const CardWrapper = styled(Box)(({ theme }) => ({
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        //textAlign: "center",
        width: "100%",
        border: "2px solid #EEEEEE",
        borderRadius: "7px",
        position: "relative",
        overflow: "hidden",
        margin:"20px 0px",
        transition: "all 0.3s ease-in-out",
        ":hover": {
          boxShadow: "0px 20px 50px rgba(44, 63, 88, 0.15)",
          border:"2px solid #0062e3"
        },
        ":hover .CardOverlyIcons": {
          [theme.breakpoints.up("sm")]: {
            right: "15px",
          },
        },
        ":hover .cardImg": {
          transition: "all 0.3s ease-in-out",
          [theme.breakpoints.up("sm")]: {
            transform: "scale(1.1)",
          },
        },
        ":hover .ButtonCard": {
          background: "#3069EB",
          color: "white",
        },
        [theme.breakpoints.down('sm')]:{
          flexDirection:"column"
        }
      }));

    const FlexBetweenWrapper = styled(Box)(() => ({
      display: "flex",
      flexDirection:"row",
    //   alignItems: "center",
      justifyContent: "space-between",
      padding:"10px"
  }));

  const TextWrapper  = styled(Typography)(({theme}) => ({
    fontSize: "12px",
    fontWeight: "700",
    color: "#333333",
    lineHeight: "1.5",
    letterSpacing: "0.05em",
    [theme.breakpoints.down('sm')]:{
      fontSize: "12px",
    }
  }));

  const MiddleWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection:"column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft:"10px"
}));

  return (
    <MainWrapper>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <CardWrapper>
                        <FlexBetweenWrapper>
                            <FlexBetweenWrapper>
                                <CardMedia
                                    component="img"
                                     height="100"
                                    image={"https://picsum.photos/200/300"}
                                    alt={"image"}
                                    sx={{
                                        width:"30%"
                                    }}
                                />
                                <MiddleWrapper>
                                    <TextWrapper>Camera</TextWrapper>
                                    <TextWrapper></TextWrapper>
                                    <Box
                                        sx={{
                                            display:"flex",
                                            flexDirection:"row",

                                        }}
                                    >
                                        <TextWrapper sx={{mr:2}}>Color:Red</TextWrapper>
                                        <TextWrapper>Size:XL</TextWrapper>
                                    </Box>
                                    <TextWrapper>Product Price: BDT. 2,000</TextWrapper>
                                </MiddleWrapper>
                            </FlexBetweenWrapper>
                            <MiddleWrapper sx={{padding:"10px"}}>
                                <TextWrapper></TextWrapper>
                                <TextWrapper></TextWrapper>
                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",

                                    }}
                                >
                                </Box>
                                <TextWrapper>Shopping Method:EMS</TextWrapper>
                                <TextWrapper>Shopping Charge:BDT.100</TextWrapper>
                            </MiddleWrapper>

                            <MiddleWrapper sx={{padding:"10px"}}>
                                <TextWrapper></TextWrapper>
                                <TextWrapper></TextWrapper>
                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",

                                    }}
                                >
                                </Box>
                                <TextWrapper>Shopping Method:EMS</TextWrapper>
                                <TextWrapper>Total Price:{2100}</TextWrapper>
                            </MiddleWrapper>
                        </FlexBetweenWrapper>
                        <Box>
                            <IconButton><DeleteIcon sx={{color:"black"}}/></IconButton>
                        </Box>
                    </CardWrapper>

                    <CardWrapper>
                        <FlexBetweenWrapper>
                            <FlexBetweenWrapper>
                                <CardMedia
                                    component="img"
                                     height="100"
                                    image={"https://picsum.photos/200/300"}
                                    alt={"image"}
                                    sx={{
                                        width:"30%"
                                    }}
                                />
                                <MiddleWrapper>
                                    <TextWrapper>Camera</TextWrapper>
                                    <TextWrapper></TextWrapper>
                                    <Box
                                        sx={{
                                            display:"flex",
                                            flexDirection:"row",

                                        }}
                                    >
                                        <TextWrapper sx={{mr:2}}>Color:Red</TextWrapper>
                                        <TextWrapper>Size:XL</TextWrapper>
                                    </Box>
                                    <TextWrapper>Product Price: BDT. 2,000</TextWrapper>
                                </MiddleWrapper>
                            </FlexBetweenWrapper>
                            <MiddleWrapper sx={{padding:"10px"}}>
                                <TextWrapper></TextWrapper>
                                <TextWrapper></TextWrapper>
                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",

                                    }}
                                >
                                </Box>
                                <TextWrapper>Shopping Method:EMS</TextWrapper>
                                <TextWrapper>Shopping Charge:BDT.100</TextWrapper>
                            </MiddleWrapper>

                            <MiddleWrapper sx={{padding:"10px"}}>
                                <TextWrapper></TextWrapper>
                                <TextWrapper></TextWrapper>
                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",

                                    }}
                                >
                                </Box>
                                <TextWrapper>Shopping Method:EMS</TextWrapper>
                                <TextWrapper>Total Price:{2100}</TextWrapper>
                            </MiddleWrapper>
                        </FlexBetweenWrapper>
                        <Box>
                            <IconButton><DeleteIcon sx={{color:"black"}}/></IconButton>
                        </Box>
                    </CardWrapper>

                    <CardWrapper>
                        <FlexBetweenWrapper>
                            <FlexBetweenWrapper>
                                <CardMedia
                                    component="img"
                                     height="100"
                                    image={"https://picsum.photos/200/300"}
                                    alt={"image"}
                                    sx={{
                                        width:"30%"
                                    }}
                                />
                                <MiddleWrapper>
                                    <TextWrapper>Camera</TextWrapper>
                                    <TextWrapper></TextWrapper>
                                    <Box
                                        sx={{
                                            display:"flex",
                                            flexDirection:"row",

                                        }}
                                    >
                                        <TextWrapper sx={{mr:2}}>Color:Red</TextWrapper>
                                        <TextWrapper>Size:XL</TextWrapper>
                                    </Box>
                                    <TextWrapper>Product Price: BDT. 2,000</TextWrapper>
                                </MiddleWrapper>
                            </FlexBetweenWrapper>
                            <MiddleWrapper sx={{padding:"10px"}}>
                                <TextWrapper></TextWrapper>
                                <TextWrapper></TextWrapper>
                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",

                                    }}
                                >
                                </Box>
                                <TextWrapper>Shopping Method:EMS</TextWrapper>
                                <TextWrapper>Shopping Charge:BDT.100</TextWrapper>
                            </MiddleWrapper>

                            <MiddleWrapper sx={{padding:"10px"}}>
                                <TextWrapper></TextWrapper>
                                <TextWrapper></TextWrapper>
                                <Box
                                    sx={{
                                        display:"flex",
                                        flexDirection:"row",

                                    }}
                                >
                                </Box>
                                <TextWrapper>Shopping Method:EMS</TextWrapper>
                                <TextWrapper>Total Price:{2100}</TextWrapper>
                            </MiddleWrapper>
                        </FlexBetweenWrapper>
                        <Box>
                            <IconButton><DeleteIcon sx={{color:"black"}}/></IconButton>
                        </Box>
                    </CardWrapper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardWrapper sx={{flexDirection:"column"}}>
                        <Box
                            sx={{
                                borderBottom: '1px solid #EEEEEE',
                                display:'flex',
                                alignItems: 'center',
                                justifyContent:'center',
                                width: '100%',
                            }}
                        >
                            <Typography sx={{textTransform:'uppercase'}}>Order Summary</Typography>
                        </Box>
                        <Box 
                            sx={{
                                padding:"10px"
                            }}
                        >
                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    padding:"10px"
                                }}
                            >
                                <TextWrapper>SubTotal (1Items)</TextWrapper>
                                <TextWrapper>$2000</TextWrapper>
                            </Box>

                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    padding:"10px"
                                }}
                            >
                                <TextWrapper>Discount</TextWrapper>
                                <TextWrapper>$0</TextWrapper>
                            </Box>

                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    padding:"10px"
                                }}
                            >
                                <TextWrapper>Shipping Charge</TextWrapper>
                                <TextWrapper>$100</TextWrapper>
                            </Box>

                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    padding:"10px"
                                }}
                            >
                                <TextWrapper>Wallet Debit</TextWrapper>
                                <TextWrapper>$0</TextWrapper>
                            </Box>

                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    width:"100%"
                                }}
                            >
                                <TextField
                                    placeholder="Typer your code"
                                    InputProps={{endAdornment:<Button  sx={{
                                        backgroundColor:"#EEEEEE"
                                    }}>Apply</Button> }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                    padding:"10px"
                                }}
                            >
                                <TextWrapper>Total Payable</TextWrapper>
                                <TextWrapper>$2100</TextWrapper>
                            </Box>
                        </Box>
                    </CardWrapper>
                </Grid>
            </Grid>
        </Container>        
    </MainWrapper>
  )
}

export default CheckoutCard