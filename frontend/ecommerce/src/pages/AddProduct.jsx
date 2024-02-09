import AdminPanelNav from "../components/MainNav/AdminPanelNav";
import SideBar from "../components/SideBar";
import ProductCard from '../components/Card/ProductCard';
import {Box} from '@mui/material';

const AddProduct = () => {
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
                <ProductCard/>
            </Box>
        </div>
      )
}

export default AddProduct