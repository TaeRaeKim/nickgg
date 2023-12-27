import { Box, Container, TextField, Typography, styled } from "@mui/material"
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
    return (
        <>

            <Box className="content_bg" style={{ paddingLeft: 0, paddingRight: 0 }} sx={(theme) => {
                return {
                    [theme.breakpoints.down('sm')]: {
                        height: '400px',
                        objectFit: 'cover'
                    },
                    [theme.breakpoints.up('sm')]: {
                        height: '580px',
                        objectFit: 'cover'
                    },
                    [theme.breakpoints.up('md')]: {
                        height: '580px',
                        objectFit: 'cover'
                    },
                    [theme.breakpoints.up('lg')]: {
                        height: '700px',                        
                        objectFit: 'cover'
                    }
                }
            }}>
                <img src='bg/cut_i15523914217.png' class="bg" alt="background" loading="lazy" />
            </Box>
            <Container sx={{ textAlign: 'center', px: { xs: 0 } }} style={{
                background: 'transparent',
                backdropFilter: 'blur(8px)',
                borderRadius: '10px',
                paddingTop: '3rem'
            }}>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <img src='ico-maple.svg' width={50} height={50} style={{marginRight:'1rem'}} />
                    <Typography variant="h4" color={"white"} display={"inline-block"}>MAEZZANG.GG</Typography>
                </Box>

                <HomeTextField fullWidth id="outlined-search" label="닉네임" type="search"
                    onKeyDown={(e) => {
                        searchFieldKeyDown(e)
                    }} />
            </Container>
        </>
    )
}

export default Home