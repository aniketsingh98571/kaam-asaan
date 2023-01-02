import axios from "axios"
const getData=async(name)=>{
    const resFile = await axios({
        method: 'get',
       url: `https://api.pinata.cloud/data/pinList?metadata[name]=${name}D`,
       headers: {
        'pinata_api_key': process.env.REACT_APP_API_KEY,
        'pinata_secret_api_key':process.env.REACT_APP_SECRET_KEY
     } 
    });
   return resFile
}
const getContent=async(hash)=>{
    const resFile = await axios({
        method: 'get',
       url: `https://gateway.pinata.cloud/ipfs/${hash}`,
  });
    return resFile.data
}
export {getData,getContent}