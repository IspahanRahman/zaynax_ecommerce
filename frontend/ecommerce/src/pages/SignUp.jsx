import { FormLabel, TextField, Button, styled, Box } from '@mui/material';

const SignUp = () => {
    const MainWrapper = styled(Box)(()=>({
        backgroundColor:"#f8f9fa",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:'100vh'
    }))

    const FormWrapper = styled(Box)(()=>({
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        padding:"30px",
        width:"30%",
    }))

    const ButtonContainer = styled(Box)(()=>({
        display: "flex",
        justifyContent: "center",
    }))

    const ButtonWrapper = styled(Button)(()=>({
        borderRadius: 28,
        backgroundColor: "yellow",
        padding: "5px 25px",

    }))

  return (
    <MainWrapper>
        <FormWrapper>
            <form autoComplete="off">
                <FormLabel component="legend">Phone Number</FormLabel>
                <TextField 
                    // onChange={e => setEmail(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="email"
                    sx={{mb: 3}}
                    fullWidth
                    // value={email}
                    // error={emailError}
                 />
                 <FormLabel component="legend">Password</FormLabel>
                 <TextField 
                    // onChange={e => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    type="password"
                    // value={password}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <ButtonContainer>
                    <ButtonWrapper variant="outlined" color="secondary" type="submit">Sign Up</ButtonWrapper>
                 </ButtonContainer>
            </form>
        </FormWrapper>
    </MainWrapper>
  )
}

export default SignUp