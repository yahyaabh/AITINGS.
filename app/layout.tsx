"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Handjet } from 'next/font/google'
import {createTheme, ThemeProvider} from '@mui/material'




const theme = createTheme({
  palette : {
    primary : {
        main: "#f9d10f",
        light: "#f1a728",
        dark: "#d78d0e"
    },
    secondary : {
      main: "#314051" ,
      light: "#587391",
      dark: "#1e2731"
    }
  },
  typography:{
    fontFamily :  [
      '"Segoe UI"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
  
  
  
})

const inter = Inter({ subsets: ['latin'] })
 export const handjet = Handjet({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'AITings',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
    <html lang="en">
      <body className={inter.className}>
      
        <ThemeProvider theme={theme}>
          {children}
        
        </ThemeProvider>
        </body>
    </html>

    </>
  )
}
