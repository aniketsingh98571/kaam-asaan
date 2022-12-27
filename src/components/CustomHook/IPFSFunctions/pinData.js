import axios from "axios"
const pinImage=async(image,username,governmentId)=>{
    console.log(image)
    console.log(username)
    console.log(governmentId)
    const formData = new FormData();
    formData.append('file', image)
   const metadata = JSON.stringify({
      name:username,
     });
    formData.append('pinataMetadata', metadata);
    const options = JSON.stringify({
      cidVersion: 0,
      username:username,
      governmentId:governmentId
    })
    console.log(process.env.API_KEY)
    formData.append('pinataOptions', options);
    const res=await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'pinata_api_key': process.env.REACT_APP_API_KEY,
          'pinata_secret_api_key':process.env.REACT_APP_SECRET_KEY
        }
      });
      return res.data
  }
const pinJson=async(data)=>{
  const mintData = JSON.stringify({
        "pinataOptions": {
          "cidVersion": 1
        },
        "pinataMetadata": {
          "name": "name12",
        },
          "pinataContent":data
        });
    
      const resFile = await axios({
        method: "post",
        url: `https://api.pinata.cloud/pinning/pinJSONToIPFS`,
        data:mintData,
       headers: {
            'Content-Type': 'application/json',
            'pinata_api_key': `61dd1e72dc4001a45656`,
            'pinata_secret_api_key': `0525dc7c902ea85dbea7c7469c24930e21f6287b5ef1bff0bf388314b88e0928`,
            }
    });
   return resFile.data
}
export  {pinImage,pinJson}