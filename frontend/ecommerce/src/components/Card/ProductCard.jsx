import { FormLabel, TextField, Button, styled, Box } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from 'react';

const ProductCard = () =>{
    let [formObj, setFormObj ] = useState({
        productName:"",
        productPrice:"",
        discount:"",
        shipping_charge:"",
        color:"",
        size:"",
        status:""
    })
    const [active, setActive ] = useState("true");
    const handleChange = (event, newAlignment) => {
        setActive(newAlignment === 'true');
        setFormObj(prevObj => ({
            ...prevObj,
            status: newAlignment === 'true'
        }));
    };
    const MainWrapper = styled(Box)(()=>({
        backgroundColor:"#f8f9fa",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        minHeight:'100vh',
        width:"100%",
        
    }))

    const FormWrapper = styled(Box)(()=>({
        boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
        padding:"30px",
        width:"30%",
        marginTop:"20px",
        marginBottom:"40px"
    }))

    const ButtonContainer = styled(Box)(()=>({
        display: "flex",
        justifyContent: "center",
    }))

    const ButtonWrapper = styled(Button)(()=>({
        borderRadius: 28,
        backgroundColor: "yellow",
        padding: "5px 25px",

    }));

    const InputOnChange = (property,value) => {
        setFormObj(prevObj=>({
            ...prevObj,
            [property]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch('http://localhost:3010/api/create_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObj)
        });
        if (!response.ok) {
            throw new Error('Failed to create product');
        }
        console.log('Product created successfully');

    } catch (error) {
        console.error('Error creating product:', error.message);
    }
        
      };

  return (
    <MainWrapper>
        <FormWrapper>
            <form  onSubmit={handleSubmit}>
                <FormLabel component="legend">Prodcut Name</FormLabel>
                <TextField 
                    onChange={(e) =>{InputOnChange("productName",e.target.value)}}
                    required
                    variant="outlined"
                    color="primary"
                    sx={{mb: 3}}
                    name='productName'
                    fullWidth
                    value={formObj.productName}
                    // error={emailError}
                 />
                 <FormLabel component="legend">Product Price (Before Discount)</FormLabel>
                 <TextField 
                    onChange={e => InputOnChange("productPrice",e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={formObj.productPrice}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <FormLabel component="legend">Discount Rate</FormLabel>
                 <TextField 
                    onChange={e => InputOnChange("discount",e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={formObj.discount}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <FormLabel component="legend">Shipping Charge</FormLabel>
                 <TextField 
                    onChange={e => InputOnChange("shipping_charge",e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={formObj.shipping_charge}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <FormLabel component="legend">Color</FormLabel>
                 <TextField 
                    onChange={e => InputOnChange("color",e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={formObj.color}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <FormLabel component="legend">Size</FormLabel>
                 <TextField 
                    onChange={e => InputOnChange("size",e.target.value)}
                    required
                    variant="outlined"
                    color="primary"
                    value={formObj.size}
                    // error={passwordError}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                    }}
                 >
                    <FormLabel component="legend">Quantity</FormLabel> 
                    <ToggleButtonGroup
                        color="primary"
                        value={active}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        >
                        <ToggleButton value="true" >Yes</ToggleButton>
                        <ToggleButton value="false">No</ToggleButton>
                        </ToggleButtonGroup>
                 </Box>
                 <ButtonContainer>
                    <ButtonWrapper variant="outlined" color="secondary" type="submit">Add Product</ButtonWrapper>
                 </ButtonContainer>
            </form>
        </FormWrapper>
    </MainWrapper>
  )
}

export default ProductCard