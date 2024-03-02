import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom";

function PostSnippet(props) {

    return (
        <div className="articles-container">
            <div className="article-container">
                <Card
                    type="inner"
                    style={{ marginTop: '16px' }}
                    title={props.title}
                    extra={<Link to={`/post/${props.id}`}>Read More</Link>}>
                    {props.facts}
                </Card>
            </div>
        </div>
    )
}

export default PostSnippet;