"use client"
import {AppBar, Stack, Toolbar, Typography, ThemeProvider,Link, Button} from "@mui/material"
import { handjet } from "../app/layout"

function MainNav() {
  return (
    
    <AppBar sx={{bgcolor:"secondary.dark"}}>
        <Toolbar>
            <Stack  sx={{flexGrow :1}}>
                <Link  className={handjet.className}
                  component="h6"
                  variant="h6"
                  sx={{color: "primary.main",fontSize: "h3.fontSize", letterSpacing:4}}>
                      AITings
                 </Link>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Button variant="contained" sx ={{":hover" : {bgcolor:"primary.main"},boxShadow : '1px 1px 10px  #f1a728' }}>Features</Button>
                <Button variant="contained" sx ={{":hover" : {bgcolor:"primary.main"},boxShadow : '1px 1px 10px #f1a728 '}}>About us</Button>
                <Button variant="contained" sx ={{":hover" : {bgcolor:"primary.main"},boxShadow : '1px 1px 10px #f1a728 '}}>Contact us</Button>
            </Stack>
        </Toolbar>
    </AppBar>


    
  )
}

export default MainNav
