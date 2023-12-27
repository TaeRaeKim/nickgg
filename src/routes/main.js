import { useLocation, useNavigate, useOutlet } from "react-router-dom"
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Link, SvgIcon } from "@mui/material";
import { Image, Margin } from "@mui/icons-material";
import {ReactComponent as MapleIcon} from '../assets/ico-maple.svg';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" mt={10}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                M A P L E Z Z A N G
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Main() {
    const pages = ['홈', '랭킹', '가이드', '커뮤니티'];
    const routes = ['list', 'reserveList', 'completeList'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();

    const nav = (index) => {
        navigate(routes[index])
    }
    const home = () => {
        navigate('')
    }
    const currentOutlet = useOutlet()
    const location = useLocation()


    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Mobile */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={page} onClick={() => {
                                        handleCloseNavMenu();
                                        nav(index);
                                    }}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Button
                            variant="h5"
                            href="/"
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 99,
                                fontWeight: 700,
                                fontSize: 22,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >

                            메짱
                        </Button>


                        {/* PC */}
                        <Button
                            variant="h6"
                            component="a"
                            onClick={() => {
                                home();
                            }}
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                fontSize: 22,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        {/* <SvgIcon component={MapleIcon} viewBox="0 0 24 24"/> */}
                    <img src='ico-maple.svg' width={50} height={50} style={{marginRight:'1rem'}} />
                        메짱
                        </Button>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={page}
                                    onClick={() => {
                                        nav(index);
                                    }}
                                    sx={{ my: 2, fontSize: 20, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <br />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                >
                    {(state) => (
                        <>
                            <div className={'page'}>
                                {currentOutlet}
                                <Copyright />
                            </div>
                        </>
                    )}
                </CSSTransition>
            </SwitchTransition >
        </>
    );
}
export default Main