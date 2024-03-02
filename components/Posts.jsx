import React from "react";
import { PageHeader } from "@ant-design/pro-layout";
import PostSnippet from "./PostSnippet";
import { api } from '../api/api';


const Posts = (props) => {
    return (
        <div className="post-container">
            <div className="page-header-container">
                <PageHeader
                    style={{ border: '1px solid rgb(235, 237, 240)' }}
                    title='Posts' />
            </div>

            <div className="article-container">
                {
                    api.map((row, idx) => (
                        <PostSnippet
                            key={idx}
                            id={idx}
                            title={row.country}
                            facts={row.facts}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Posts;

