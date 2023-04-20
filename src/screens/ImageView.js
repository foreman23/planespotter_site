import { useParams } from "react-router-dom";
import images from '../ImageData';
import { Image, List, Button, Icon } from 'semantic-ui-react';
import { Col, Row, Container } from 'react-bootstrap';

const ImageView = (props) => {

    // Retrieve corresponding image
    const { imageID } = useParams();
    const image = images[imageID - 1];
    console.log(images.length);

    // Check if last photo
    let renderNext = true;
    if (image.id === images.length) {
        renderNext = false;
    }
    // Check if first photo
    let renderPrev = true;
    if (image.id === 1) {
        renderPrev = false;
    }

    return (
        <div style={{ backgroundColor: '#D6D6D6', paddingBottom: '30px', marginBottom: '30px' }}>
            <Container>
                <Row style={{ paddingTop: '25px' }}>
                    <span className="portfolioButtons">
                        <Button href='/portfolio'>Back</Button>
                        {renderPrev ? (
                            <Button href={`/image/${image.id - 1}`}><Icon name="chevron left"></Icon>Prev</Button>
                        ) :
                            <Button disabled><Icon name="chevron left"></Icon>Prev</Button>
                        }
                        {renderNext ? (
                            <Button href={`/image/${image.id + 1}`}>Next<Icon name="chevron right"></Icon></Button>
                        ) :
                            <Button disabled>Next<Icon name="chevron right"></Icon></Button>
                        }
                    </span>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Image style={{boxShadow: '2px 4px 8px 0 rgba(0, 0, 0, 0.2)'}} size="massive" className="fullImage" key={image.id} src={image.filename} />
                    </Col>
                    <Col>
                        <Row>
                            <List.Item><List.Header style={{marginTop: '20px', textAlign: 'center'}} as={'h3'}>{image.title}</List.Header></List.Item>
                        </Row>
                        <Row>
                            <List.Item><List.Description style={{textAlign: 'center', fontSize: 'medium', fontFamily: 'lato', padding: '10px', paddingBottom: '10px'}}>{image.description}</List.Description></List.Item>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ImageView