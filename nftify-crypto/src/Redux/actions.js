import { getRequestToken, getRequestTokenSuccess, getRequestTokenFailed } from './pairTokenSlice'
import axios from 'axios';


export const getCryptoData = (url) => async (dispatch) => {
    try {
        dispatch(getRequestToken());
        const res = await axios.get(url);
            console.log(res.data.pairs);
        dispatch(getRequestTokenSuccess(res.data.pairs));
    } catch (error) {
        dispatch(getRequestTokenFailed());
        console.log(error);
        throw error
    }
}