import { getRequestToken, getRequestTokenSuccess, getRequestTokenFailed } from './pairTokenSlice'
import axios from 'axios';


export const getCryptoData = (url) => async (dispatch) => {
    try {
        dispatch(getRequestToken());
        const res = await axios.get(url);
            console.log(res.data.pairs);
            let data = res.data.pairs;
            const max10Pairs = data.slice(0,10);
            max10Pairs.sort((a,b) => {
                const bprice = Number(b.priceUsd);
                const aprice = Number(a.priceUsd);
                return bprice - aprice;
            })
            data = null; //garbage collecting data
            // sort by descending order;

        dispatch(getRequestTokenSuccess(max10Pairs));
    } catch (error) {
        dispatch(getRequestTokenFailed());
        console.log(error);
        throw error
    }
}