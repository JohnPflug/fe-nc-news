import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

export default function BootContainer({ data }) {
    console.log(data);
    return (
        <Container>
            <ListGroup>
                {data.map((article) => (
                    <ListGroup.Item key={article.article_id}>
                        <Row>
                            <Col md={2}>
                                <img src={article.article_img_url} alt={article.title} style={{ width: '100%' }} />
                            </Col>
                            <Col md={10}>
                                <b>Posted by</b> {article.author} <b>at</b> {article.created_at} <br />
                                <b>Topic:</b> {article.topic} <br />
                                <b>Title: </b>{article.title} <br />
                                <b>Comments:</b> {article.comment_count} <b>Votes:</b>{article.votes}
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};