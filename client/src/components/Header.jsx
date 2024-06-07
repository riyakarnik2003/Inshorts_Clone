
import { Toolbar, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';

const StyledHeader = styled(AppBar)`

    background:#fff;
    height:70px;
`;

const StyleMenuIcon = styled(MenuIcon)`
    color:#000;

`

const Image = styled('img')({
    height:55,
    margin:'auto',
    paddingRight:70
    

})

const Header=()=>{
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
   return(
   <StyledHeader position='static'>
        <Toolbar>
            <StyleMenuIcon/>
            <Image src={url} alt="" />
        </Toolbar>
   </StyledHeader>
   )
}

export default Header;