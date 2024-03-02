import { PageHeader } from "@ant-design/pro-layout";
import React from "react";
import { Input, Button } from "antd";
const { TextArea } = Input


const CreatePost = () => {
    return (
        <div className="create-post-container">
            <div className="page-header-container">
                <PageHeader
                    style={{ border: '1px solid rgb(235,237,240)' }}
                    title={'Create Post'}
                />
            </div>

            <div className="posts-input-container">
                <div className="post-input-container">
                    <div className="post-input-title">
                        <h2>Country Name</h2>
                    </div>
                    <div className="post-input">
                        <Input placeholder="Country Name" />
                    </div>
                </div>

                <div className="post-input-container">
                    <div className="post-input-title">
                        <h2>Facts</h2>
                    </div>
                    <div className="post-input">
                        <TextArea rows={6} placeholder="Country Facts" />
                    </div>
                </div>

                <div className="post-input-button">
                    <Button type="primary">Save Fact</Button>
                </div>

            </div>

        </div>


    )
}

export default CreatePost;