import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useAuth from "../../utils/useAuth"

const UpdateItem = () => {
    const params = useParams()

    const [title, setTitle] = useState("")   
    const [rate, setRate] = useState("")  
    const [image, setImage] = useState("")  
    const [description, setDescription] = useState("") 
    const [email, setEmail] = useState("")

    useEffect(() => {
        document.title = "edit page"
        
        const getSingleItem = async() => {
            const response = await fetch(`https://mern-pizza-blog.onrender.com/item/${params.id}`)
            const jsonResponse = await response.json()
            setTitle(jsonResponse.singleItem.title)
            setRate(jsonResponse.singleItem.rate)
            setImage(jsonResponse.singleItem.image)
            setDescription(jsonResponse.singleItem.description)
            setEmail(jsonResponse.singleItem.email)
        }
        getSingleItem()
    }, [params.id])	

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`https://mern-pizza-blog.onrender.com/item/update/${params.id}`, {
                method: "PUT",
                headers: { 
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    title: title,
                    rate: rate,
                    image: image,
                    description: description
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message) 
        }catch(err){
            alert("failed edit")
        }
    }
    
     const loginUser = useAuth()

        if(loginUser === email){
        return (
            <div>
                <h1 className="page-title">edit the article</h1>
                <form onSubmit={handleSubmit}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="restaurant name" required/>
                    <input value={rate} onChange={(e) => setRate(e.target.value)} type="text" name="rate" placeholder="rate" required/>
                    <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="image" required/>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" rows="15" placeholder="comment" required></textarea>
                    <button>edit</button>
                </form>
            </div>
        )
     }else{	                            
        return <h1>you don't have authorization!</h1>
    } 
}

export default UpdateItem