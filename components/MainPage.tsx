import {Stack, Card, CardActions, CardContent, Typography} from "@mui/material"
import Image from 'next/image';
import robot from "../public/a-yellow-cute-small-robot-in-space-on-the-moon-upscaled.png"
function MainPage() {
  return (
        <Stack spacing={1} height={500}  direction="row"  justifyContent="center" alignItems="center" >
            <Card  sx={{bgcolor: "black" , color:"white",maxWidth:500  }} >
                <CardContent >
                    <Typography   variant="h5" sx={{fontSize: 35, fontWeight:"bold", color:"primary.main" }}>Welcome to AITings.</Typography>
                    <Typography align="left" sx={{fontSize:20}}>If you like ai and want to have fun with ai , for completely free , you are at the right place, check our features and start experimenting.</Typography>
                </CardContent>
            </Card>
            <Image style={{borderRadius: "50%", border: '2px solid #fff',}} src={robot} alt="a small yellow robot in space" width={300} height={300}></Image>
 
        </Stack>
  )
}

export default MainPage
