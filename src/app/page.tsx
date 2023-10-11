"use client"
import Image from 'next/image'
import styles from './page.module.css'
// import ResponsiveAppBar from './Home/page'
import Header from './home/components/Header'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { ThemeProvider ,Box,Typography} from '@mui/material'
import { createCustomTheme } from '@/theme'
import SiderBar from './home/components/Navbar'
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const theme = createCustomTheme()
import "src/Scss/main.css";
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
{/* <Header/> */}
{/* <SiderBar /> */}

    </ThemeProvider>
    
  )
}
