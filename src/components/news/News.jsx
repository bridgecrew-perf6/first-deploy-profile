import React from 'react';
import { Col } from 'react-bootstrap';
import Content from './content/Content';
import Sidebar from './Sidebar/Sidebar';
export default function News(props) {
    return (
        <>
            <Col className="main__content" lg={9}>
                <Content />
            </Col>
            <Col className="main__profile" lg={3}>
                <Sidebar />
            </Col>
        </>

    )
}


