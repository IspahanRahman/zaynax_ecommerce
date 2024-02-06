import { Box, Typography,styled, AppBar, Container, TextField,InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {ShoppingCart,Person} from '@mui/icons-material';
import {testLogo} from "../../assets/";

const MainNav = () => {

    const Search = styled(Box)(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

    // const BodyWrapper = styled(Box)(()=>({
    //     backgroundColor:"#f8f9fa",
    //     display:"flex",
    //     minHeight:'100vh'
    // }))

    const MainNavWrapper = styled(AppBar)(()=>({
        backgroundColor:"#fff",
        padding:"20px 15px",
    }))

    const FlexBetweenWrapper = styled(Box)(()=>({
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    }))
  return (
    <Box sx={{ flexGrow: 1 }}>
        <MainNavWrapper position="static">
            <Container>
                <FlexBetweenWrapper>
                    <img
                        src={testLogo}
                        alt="logo"
                        width={100}
                    />
                    <Box flex={0.5}>
                        <form>
                            <Search>
                                <TextField
                                    fullWidth
                                    id="standard-basic" 
                                    placeholder="Search" 
                                    variant="standard"
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <SearchIcon sx={{color:"black"}}/>
                                          </InputAdornment>
                                        ),
                                      }}
                                />
                            </Search>
                        </form>
                    </Box>
                    <Box sx={{
                        display:"flex",

                    }}>
                        <ShoppingCart sx={{color:"black",mr:1}}/>
                        <Typography sx={{color:"black"}}>Cart</Typography>
                    </Box>
                    <Person sx={{color:"black"}}/>
                </FlexBetweenWrapper>

            </Container>
        </MainNavWrapper>
    </Box>
  )
}

export default MainNav