import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@material-ui/core/Link";
import EmailIcon from "@mui/icons-material/Email";
import './navbarRedone.scss'
import HackLogo from './HackLogo.svg'
import cometLogo from './Galactic.svg'
import { createTheme } from '@mui/material/styles';
import Player from './music/player'

const pages = ["Game", "Explanation", "Team"];

const ResponsiveAppBar = (url) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const theme = createTheme({
    status: {
      error: '#760A21',
    },
    palette: {
      
      primary: {
        main: '#760A21',
        darker: '#760A21',
        error: '#760A21',
      },
      neutral: {
        main: '#760A21',
        contrastText: '#fff',
      },
    },
  });
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: 0.25,
        backgroundColor: "#fff",
        color: "#000",
        height: '65px',
        overflow:'none',
        width: '100%',
        
        
      }}
      elevation={8}
      className='appbar'
    >
      <Container sx={{height: '65px',
    overflow:'hidden'}} maxWidth="xl">
        <Toolbar sx={{height: '65px',
    overflow:'hidden'}} disableGutters>
          <Box>
            <Button >
            <a href="/#Simulation" className="logo">
            <object type="image/svg+xml" data={cometLogo}>svg-image</object>
            </a>
            </Button>
           
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginLeft: 30 },
            }}
          >
            {pages.map((page) => (
              <Button className='button'
                href={`#${page}`}
                variant="outlined"
                key={page}
                color='error'
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'error',
                  display: "outlined",
                  marginRight: 2,
                  color: '#760A21',
                  borderColor: "#760A21",
                  boxShadow: 'none'
                  
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 12 }}></Box>
          <Box sx={{ 
          }}>
          <div className="playerContainer">

          <Player ></Player>
          </div>
          </Box>
                   




            <div className="boxContainer">
            
          <Box sx={{ flexGrow: 0}}>
            
            <IconButton href='https://github.com/kushasareen/physics-hackathon-2022' target='_blank' rel="noopener">
              <GitHubIcon  className="icon"> </GitHubIcon>
              {console.log(<GitHubIcon  className="icon"> </GitHubIcon>)}
              {console.log(typeof <GitHubIcon  className="icon"> </GitHubIcon>)}
              
            </IconButton>


          </Box>
          </div>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none", color: "inherit" },
            }}
          >
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography mt={0.2} padding={1} textAlign="center">
                      {" "}
                      <Link
                        style={{ textDecoration: "none", color: "black" }}
                        href={`#${page}`}
                      >
                        {page}
                      </Link>{" "}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
