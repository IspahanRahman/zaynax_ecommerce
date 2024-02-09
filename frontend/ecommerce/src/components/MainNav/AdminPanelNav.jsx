import { Box, Typography,styled, AppBar, Container } from "@mui/material";
import {testLogo} from "../../assets/";

const AdminPanelNav = () => {
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
                    <Typography sx={{color:"black",fontSize:"20px", fontWeight:"bold"}}>Md. Mahmud-Ur-Rahman</Typography>
                </FlexBetweenWrapper>

            </Container>
        </MainNavWrapper>
    </Box>
  )
}

export default AdminPanelNav