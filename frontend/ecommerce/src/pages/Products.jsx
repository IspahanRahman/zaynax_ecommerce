
import AdminPanelNav from "../components/MainNav/AdminPanelNav";
import SideBar from "../components/SideBar";
import AdminPanelProduct from '../components/Products/AdminPanelProducts';
import {Box} from '@mui/material';

const Products = () => {
  return (
    <div>
        <AdminPanelNav/>
        <Box 
            sx={{
                display: 'flex',
                flexDirection:"row"
            }}
        >
            <SideBar/>
            <AdminPanelProduct/>
        </Box>
    </div>
  )
}

export default Products