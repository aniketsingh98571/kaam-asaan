import React from "react"
import axios from "axios"
const unpinData=async(CID)=>{
    const config = {
  method: 'delete',
  url: `https://api.pinata.cloud/pinning/unpin/${CID}`,
  headers: { 
    'pinata_api_key': process.env.REACT_APP_API_KEY,
    'pinata_secret_api_key':process.env.REACT_APP_SECRET_KEY
  }
};

const res = await axios(config);
return res.data
}
export {unpinData}