import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
    const [article , setArticle] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        try {
             const Url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a1c8439291fd49569a93c1793c5027fa';
        fetch(Url).then((Response) =>{
            if(!Response.ok){
                setLoading(false)
                throw new Error ('Something went wrong');
            } else{
               return Response.json();
            }
        }).then((data) => {
            console.log(data.articles);
            // const filteredNews = newArray.filter((news) => news.articles.description !== 'null' && news.articles.author !== 'null' && news.articles.content !== 'null' );
            return setArticle(data.articles)
        })
        } catch (error) {
           console.log(error.message); 
        }
        
     setLoading(false)  
    }, [])
    return (
        <>
            <h1 className="text-center my-2">Latest <span className="badge bg-dark-subtle">News</span></h1>
            {loading && article.map((news,index) => {
            return <loader/>
           })}
          {!loading && article.map((news,index) => {
            return <NewsItem key={index} author={news.author} title={news.title} description ={news.description} url={news.url} src={news.urlToImage} content={news.content} published={news} />
           })}
            
        </>
    )
};

export default NewsBoard;