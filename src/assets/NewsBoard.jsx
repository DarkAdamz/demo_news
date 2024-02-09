import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "../layout/loader";

const NewsBoard = () => {
    const [article , setArticle] = useState([]);
    const [error , setError] = useState(true);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        setError(false);
        try {
             const Url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=a1c8439291fd49569a93c1793c5027fa';
        fetch(Url).then((Response) =>{
            setLoading(true);
            if(!Response.ok){
                setLoading(false);
                setError(true);
                throw new Error ('Something went wrong');
            } else{
                setError(false);
               return Response.json();
            }
        }).then((data) => {
            setLoading(false)
            console.log(data.articles);
            // const filteredNews = newArray.filter((news) => news.articles.description !== 'null' && news.articles.author !== 'null' && news.articles.content !== 'null' );
            return setArticle(data.articles)
        })
        } catch (error) {
            setLoading(false);
            setError(true);
           console.log(error.message); 
        } 
        setLoading(false);
    }, [])
    return (
        <div className="container-fluid m-auto m-lg-0 p-1">
            <h1 className="text-center my-2">Latest <span className="badge bg-dark-subtle">News</span></h1>
            {/* While loading... */}
            {loading && !error && <Loader/>}
           {/* If the fetch was success */}
          {!loading && !error && article.map((news,index) => {
            return <NewsItem key={index} author={news.author} title={news.title} description ={news.description} url={news.url} src={news.urlToImage} content={news.content} published={news} />
           })}
            {/* If the fetch failed */}
            {error && !loading && <p className="text-danger text-center m-auto d-block fs-1 mt-6 pt-lg-0">Sorry there was an Error </p>}
        </div>
    )
};

export default NewsBoard;