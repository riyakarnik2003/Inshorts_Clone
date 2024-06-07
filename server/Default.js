
import { data } from "./constants/data.js"
import news from "./model/news-schema.js"
const DefaultData = async ()=>{
    try {
        await news.insertMany(data)
        console.log('data imported!')
    } catch (error) {
        console.log('Error',error.message)
    }
}

export default DefaultData;