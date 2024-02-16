import { useState } from "react"

const ImgInput = (props) => {
    const [imageFile, setImageFile ] = useState("")

    const handleClick = async() => {
        try{
            const data = new FormData()
            data.append("file", imageFile)
            data.append("upload_preset", "yckgolcf")
            data.append("cloud_name","nao-nkgw1")
            const response= await fetch("https://api.cloudinary.com/v1_1/nao-nkgw1/image/upload", {method: "POST", body: data})
            const jsonData = await response.json()
            await props.setImage(jsonData.url)
            alert("file uploaded successfully")
        }catch(err){
            alert("file upload failed")
        }
    }
    return (
        <div className="img-input">
            <input type="file" onChange= {(e)=> setImageFile(e.target.files[0])} accept="image/png, image/jpg"/>
            <button onClick={handleClick} disabled={!imageFile}>Image Upload</button>
        </div>
    )
}

export default ImgInput