import { PageHeader } from "@ant-design/pro-layout";
import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
const { TextArea } = Input
import { writeDataToFirestore } from "../helper/apiHelper/firebase/firebase";
import { Link } from "react-router-dom";


const CreatePost = () => {


    const [country, setCountry] = useState('');
    const [fact, setFact] = useState('');

    const onCountryNameChange = (e) => {
        setCountry(e.target.value);
    }
    const onFactChange = (e) => {
        setFact(e.target.value);
    }

    const createPost = () => {
        console.log('Create Post');
        const payload = { country, fact };
        console.log(payload);
        writeDataToFirestore(payload)
            .then(docId => console.log('Facts Added About', country))
            .catch(err => console.log(err));
    }



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
                        <Input placeholder="Country Name" value={country} onChange={onCountryNameChange} />
                    </div>
                </div>

                <div className="post-input-container">
                    <div className="post-input-title">
                        <h2>Facts</h2>
                    </div>
                    <div className="post-input">
                        <TextArea rows={6} placeholder="Country Facts" value={fact} onChange={onFactChange} />
                    </div>
                </div>

                <div className="post-goto">
                    <Link to={'/post'} style={{
                        textDecoration: 'none',
                        border: '1px solid #eee',
                        padding: '10px',
                        fontSize: '12px'
                    }}> Show All Posts </Link>
                </div>


                <div className="post-input-button">
                    <Button type="primary" onClick={createPost}>Save Fact</Button>
                </div>

            </div>

        </div>


    )
}

export default CreatePost;