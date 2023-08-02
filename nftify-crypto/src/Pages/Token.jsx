import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import CryptoCard from '../components/CryptoCard'
import { getCryptoData } from './../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const Token = () => {

    const {isLoading, isError, data} =  useSelector(({pairTokenReducer}) => pairTokenReducer)
    const dispatch = useDispatch();

    console.log(isLoading, isError, data);

    useEffect(() => {
        const url = `${process.env.REACT_APP_URL}/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8,0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`
        dispatch(getCryptoData(url));
    },[]);

    if (isLoading) {
        return <Box mt = {'55px'} boxSizing = 'border-box' pl = {"40px"} display = {'flex'} justifyContent = {'center'}>
                    <FidgetSpinner
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="dna-loading"
                            wrapperStyle={{}}
                            wrapperClass="dna-wrapper"
                            ballColors={['#ff0000', '#6c33de', '#0000ff']}
                            backgroundColor="#f42e7a"
                    />
                </Box>
    }

  return (
    <Box mt = {'55px'} boxSizing = 'border-box' pl = {"40px"}>
        <Text color = "#F7F9F9" fontFamily = {'Work Sans'} fontSize = {"24px"} fontWeight = {600} lineHeight = {'28px'}>Token Search Results</Text>

        <SimpleGrid fontFamily = {"Poppins"} mt = {'22px'} border={'2px solid red'} columns = {4} columnGap = {'12px'} rowGap = {'29px'} boxSizing = 'border-box' pr = {'32px'} pb = {'30px'}>
            {data.map(({pairCreatedAt, chainId, dexId, pairAddress, baseToken, quoteToken, priceNative, priceUsd}, index) => {
                return <CryptoCard key = {index} pairCreatedAt = {pairCreatedAt} symbol = {chainId.toUpperCase()} dexId = {dexId} pairAddress = {`#${pairAddress.slice(0,5)}...`} baseToken = {baseToken} quoteToken = {quoteToken} priceNative = {priceNative} priceUsd = {priceUsd}/>
            })}
        </SimpleGrid>
    </Box>
  )
}

export default Token