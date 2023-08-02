import { Box, Circle, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

const CryptoCard = () => {
  return (
    <GridItem height = {'188px'} background = {'#390554'} borderRadius = {'10px'} position = {'relative'} boxSizing = 'border-box' p = '23px 0 33px 32px'>
        <Text mb = {'15px'} fontSize = {'16px'} fontWeight = {600}>Basic Info</Text>
        <Box color = '#f5f5f5' display = {'flex'} alignItems = {'center'}>
            <Text fontSize = {'12px'} fontWeight = {600}>Pair created at</Text>
            <Text fontSize = {'12px'} ml = {'36px'} fontWeight = {200}>Etherium</Text>
        </Box>

        <Box mt = {'6px'} color = '#f5f5f5' display = {'flex'} alignItems = {'center'}>
            <Text fontSize = {'12px'} fontWeight = {600}>Pair created at</Text>
            <Text fontSize = {'12px'} ml = {'36px'} fontWeight = {200}>Etherium</Text>
        </Box>

        <Box mt = {'6px'} color = '#f5f5f5' display = {'flex'} alignItems = {'center'}>
            <Text fontSize = {'12px'} fontWeight = {600}>Pair created at</Text>
            <Text fontSize = {'12px'} ml = {'36px'} fontWeight = {200}>Etherium</Text>
        </Box>

        <Box mt = {'6px'} color = '#f5f5f5' display = {'flex'} alignItems = {'center'}>
            <Text fontSize = {'12px'} fontWeight = {600}>Pair created at</Text>
            <Text fontSize = {'12px'} ml = {'36px'} fontWeight = {200}>Etherium</Text>
        </Box>
        {/* info Logo */}
        <Circle cursor = 'pointer' size = {'56px'} bg = '#960252' position = {'absolute'} right = '8px' bottom = {'8px'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
            </svg>
        </Circle>
    </GridItem>
  )
}

export default CryptoCard