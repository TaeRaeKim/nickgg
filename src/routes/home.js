import { Box, Container, TextField, styled } from "@mui/material"
import { useNavigate } from "react-router-dom"

const HomeTextField = styled(TextField)(({ theme }) => ({
    '& label': {
        paddingLeft: theme.spacing(2),
        top: '-0.3rem'
    },
    '& input': {
        height: '3rem',
        paddingTop: 0,
        paddingLeft: theme.spacing(4),
        top: '-0.3rem',
    },
    '& fieldset': {
        paddingLeft: theme.spacing(2.5),
        borderRadius: '30px',
        height: '3rem',
        top: '-0.3rem'
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
        width: '550px',
    },
    [theme.breakpoints.up('md')]: {
        width: '850px',
    }
}));

function Home() {
    const navigate = useNavigate();

    function searchFieldKeyDown(e) {
        if (e.key === 'Enter') {
            navigate('/detail/' + e.target.value)
        }
    }
    return (<>
        <Container sx={{ textAlign: 'center', px: {xs: 0} }}>
            <Box component={'img'} src={process.env.PUBLIC_URL + '/artwork_115.jpg'} sx={(theme) => {
                return {
                    [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover'
                    },
                    [theme.breakpoints.up('sm')]: {
                        width: '580px',
                    },
                    [theme.breakpoints.up('md')]: {
                        width: '880px',
                    },
                    [theme.breakpoints.up('lg')]: {
                        width: '1180px',
                    }
                }
            }} />
            <HomeTextField fullWidth id="outlined-search" label="닉네임" type="search"
                onKeyDown={(e) => {
                    searchFieldKeyDown(e)
                }} />
        </Container>
    </>)
}

export default Home