import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { useState } from 'react';
import Comments from './Comments';

export default function BootContainer({ data, article_id }) {
    const navigate = useNavigate();
    const [showComments, setShowComments] = useState(false);

    return (
        <Container>
            <ListGroup className="scrollable-articles">
                {data.map((article) => (
                    <ListGroup.Item key={article.article_id}>
                        <Row>
                            <Col md={2}>
                                <img src={article.article_img_url} alt={article.title} style={{ width: '100%' }} />
                            </Col>
                            <Col md={10}>
                                Posted by <b>{article.author}</b> at <b>{article.created_at}</b> <br />
                                Topic: <b>{article.topic}</b> <br />
                                Title: <b>{article.title}</b> <br />
                                {/* If article_id specified, show article body...*/}
                                <br />
                                {article_id ? article.body : null} <br />
                                <br />
                                Comments: <b>{article.comment_count}</b> Votes: <b>{article.votes}</b>
                                {/* If article_id not specified, show button to go to article...*/}
                                {article_id ? null : <button onClick={() => navigate(`/articles/${article.article_id}`)}>Go to article</button>} <br />
                                {/* Show/hide comments buttons:*/}
                                {article_id && !showComments ? <button onClick={() => setShowComments(true)}>Show comments</button> : null}
                                {article_id && showComments ? <button onClick={() => setShowComments(false)}>Hide comments</button> : null}
                                {/* Check is showComments state is true. If so, show comments:*/}
                                {showComments ? <Comments article_id={article.article_id} /> : null}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}
