import axios from 'axios'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 32DtUMRtit6_lP4EwZrRflGqBLX2q8NNDd16JStRzrE'
    }
})