import { Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import { SearchIcon } from '../components/Social Icon SVGs/SocialIcons'
import AllRoutes from './../Routes/AllRoutes';

const Home = () => {
  return (
    <Box 
    //  border={"2px solid red"} 
     height = {'80vh'}
     position={'absolute'}
     right={0}
     top = {0}
     left = {'288px'}
     >

        <Box height = {'96vh'} overflow = {'scroll'}>
            <Box mt = {"27px"} fontFamily = {'Poppins'} boxSizing = 'border-box' pl = {"65px"} pr = {"44px"} display = {'flex'} justifyContent = {'space-between'}>
                <InputGroup boxSizing = 'border-box' overflow = {"hidden"} background = "linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)" border = {"1px solid #FFF"} borderRadius = {"20px"} w = {'435px'}>
                    <InputRightElement pointerEvents='none' pr = {'19px'} pt = {'8px'}>
                        <SearchIcon />
                    </InputRightElement>
                    <Input variant = {'none'} bg = {"none"} height = {"50px"} border = {"none"}  type='search' _placeholder={{color : "#fff", fontSize : "18px", fontWeight : "600", fontFamily : "Poppins"}} placeholder='Search' />
                </InputGroup>

                <Button variant = {'none'} height = {"52px"} width = {"156px"} borderRadius = {'20px'} background = {"linear-gradient(131deg, #7C0F35 0%, #581266 100%)"} fontFamily = {"Poppins"} fontSize = {'16px'} fontWeight = {600} color = "#fff">Connect</Button>
            </Box>

            <AllRoutes />
        </Box>
    </Box>
  )
}

export default Home