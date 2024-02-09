import { Box } from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <Box
    style={({ height: "100vh" }, { display: "flex" })}
    >
        <Sidebar
            backgroundColor="#fff"
            style={{ height: "100vh" }}>
        <Menu>
                <SubMenu  label="Promotion">
                    <MenuItem >Promo Codes</MenuItem>
                    <MenuItem >Add Promo Codes</MenuItem>
                </SubMenu>
            <MenuItem >Order</MenuItem>
            <NavLink to="/products" style={{ textDecoration: 'none' }}><MenuItem style={{color:"black"}}>Products</MenuItem></NavLink>
        </Menu>
        </Sidebar>
    </Box>
  )
}

export default SideBar