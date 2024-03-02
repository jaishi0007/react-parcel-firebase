import React, { useEffect, useState } from "react";
import { PageHeader } from "@ant-design/pro-layout";
import { Card } from "antd";
import { api } from "../api/api";
import { useParams } from "react-router";


const Post = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const post = api[id];
        setTitle(post.country);
        setContent(post.facts)
    },[])




    return (
        <div className="post-container">
            <div className="page-header-container">
                <PageHeader
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                    title={title} />
            </div>

            <div className="post-content-container">
                <Card style={{ marginTop: '20px' }} title={''}>
                    {
                        content.split('\n').map((paragraph,idx)=>(
                            <p key={idx}>{paragraph}</p>
                        ))
                    }
                </Card>
            </div>

        </div>
    )
}

export default Post;