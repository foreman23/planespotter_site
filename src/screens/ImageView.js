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
        <div>
            <Container>
                <Row style={{}}>
                    <span className="portfolioButtons">
                        <Button style={{}} href='/portfolio'>Back</Button>
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
                    <Image size="massive" className="fullImage" key={image.id} src={image.filename} />
                </Row>
                <Row>
                    <Col>
                        <List style={{textAlign: 'center', margin: '20px'}}>
                            <List.Item><List.Header as={'h4'}>{image.title}</List.Header></List.Item>
                            <List.Item><List.Description>{image.description}</List.Description></List.Item>
                        </List>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ImageView