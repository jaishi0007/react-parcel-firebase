import React, { useEffect, useState } from "react";
import { PageHeader } from "@ant-design/pro-layout";
import PostSnippet from "./PostSnippet";
import { fetchDataFromFirestore } from "../helper/apiHelper/firebase/firebase";



const Posts = (props) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetchDataFromFirestore()
            .then(data => {
                const processedData = []
                data.forEach(doc => {
                    //Destructuring doc array
                    const { id, ...data } = doc;
                    const payload = {
                        id,
                        ...data
                    };
                    processedData.push(payload);
                })
                setPost(d);
            })
            .catch(err => console.log('Error Fetching Data', e));
    }, [])



    return (
        <div className="post-container">
            <div className="page-header-container">
                <PageHeader
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                    title='Posts' />
            </div>

            <div className="article-container">
                {
                    post.map((row, idx) => (

                        <PostSnippet
                            key={idx}
                            id={idx}
                            title={row.data.country}
                            facts={row.data.fact}
                        />

                    ))
                }

            </div>
        </div>
    )
}

export default Posts;

