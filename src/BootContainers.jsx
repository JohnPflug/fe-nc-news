import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router";
import { useState } from 'react';
import Comments from './Comments';
import Vote from './Vote';

export function ArticlesContainer({ data }) {
    const navigate = useNavigate();

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
                                <br />
                                Comments: <b>{article.comment_count}</b> Votes: <b>{article.votes}</b>
                                <br />
                                <button type="button" onClick={() => navigate(`/articles/${article.article_id}`)}>Go to article</button> <br />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export function SingleArticleContainer({ data }) {
    const [showComments, setShowComments] = useState(false);
    const [error, setError] = useState(null);

    return (
        <Container>
            <Card>
                <Row>
                    <Col md={2}>
                        <img src={data[0].article_img_url} alt={data[0].title} style={{ width: '100%' }} />
                    </Col>
                    <Col md={10}>
                        Posted by <b>{data[0].author}</b> at <b>{data[0].created_at}</b> <br />
                        Topic: <b>{data[0].topic}</b> <br />
                        Title: <b>{data[0].title}</b> <br />
                        <br />
                        {data[0].body} <br />
                        <br />
                        <Vote article_id={data[0].article_id} votes={data[0].votes} setError={setError} />
                        {error ? (<><br />{error}<br /><br /></>) : null}
                        {showComments ? (
                            <>
                                <button type="button" onClick={() => setShowComments(false)}>Hide comments</button>
                                <Comments article_id={data[0].article_id} />
                            </>)
                            : <button type="button" onClick={() => setShowComments(true)}>Show comments</button>}
                    </Col>
                </Row>
            </Card>
        </Container >
    );
}
