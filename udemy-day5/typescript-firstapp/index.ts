import axios from 'axios';


interface Post{
    userId: number;
    title: string;
    body: string;
}
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url).then(res=>{
    const post = res.data as Post

    const userId = post.userId
    const title = post.title
    const body = post.body

    printPost(userId, title, body)
})
   
const printPost = (userId:number, title:string, body:string) =>{
    console.log(`
    User Id is ${userId}
    Title of post: ${title}
    Post Content: ${body}
    
    `)
}
