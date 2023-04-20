import { Image, Button, Loader, Icon, List, Menu, Dropdown } from "semantic-ui-react";
import { Container, Row, Col } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useState } from "react";

import images from "../ImageData";

import splashImg from '../images/splashText.webp';

const tagOptions = []

for (let i = 3; i <= 24; i += 3) {
    tagOptions.push({
        key: i.toString(),
        text: i.toString(),
        value: i,
    })
}

const aircraftOptions = [
    {
        key: '1',
        text: 'F-16',
        value: 'f16',
    },
    {
        key: '2',
        text: 'F-15',
        value: 'f15',
    },
    {
        key: '3',
        text: 'C-17',
        value: 'c17',
    },
    {
        key: '4',
        text: 'F-22',
        value: 'f22',
    },
]


const Portfolio = (props) => {

    // Handles displaying images
    const [startIndex, setStartIndex] = useState(0);
    const [imagesPerPage, setImagesPerPage] = useState(24);

    // go forward (imagesPerPage)
    const handleClickNext = () => {
        const nextIndex = startIndex + imagesPerPage;
        if (nextIndex < images.length) {
            setIsLoading(true);
            setStartIndex(nextIndex);
        }
    }

    // go back (imagesPerPage)
    const handleClickPrev = () => {
        const prevIndex = startIndex - imagesPerPage;
        if (prevIndex >= 0) {
            setIsLoading(true);
            setStartIndex(prevIndex);
        }
    }

    // go to page index
    const handleIndexClick = (index) => {
        const nextIndex = (index * imagesPerPage) - imagesPerPage;
        if (startIndex !== nextIndex) {
            setIsLoading(true);
            setStartIndex(nextIndex);
        }
    }

    const displayedImages = images.slice(startIndex, startIndex + imagesPerPage);

    // Handles displaying load progress
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    }

    // Populate page number array
    let pageNums = [];
    let pages = (images.length / imagesPerPage)
    pages = Math.ceil(pages);
    for (let i = 1; i <= pages; i++) {
        pageNums.push(i);
    }

    // Handle change to images per page
    const handleFilterAmount = (event, { value }) => {
        setImagesPerPage(value)
    }

    return (
        <div>
            <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <Image taget='_blank' href='/' style={{ width: '300px', display: 'flex', justifyContent: 'center', margin: 'auto', padding: '10px' }} src={splashImg}></Image>
            </div>
            <Container className="portfolioContainer">
                <Row>
                    <div className='portfolioBar'>
                        <h5 style={{ marginRight: '10px' }}>Page: {Math.ceil((startIndex + 1) / imagesPerPage)} of {Math.ceil(images.length / imagesPerPage)}</h5>
                        <span>
                            <Dropdown
                                placeholder="Aircraft"
                                multiple
                                search
                                selection
                                fluid
                                style={{ width: '30vw', marginRight: '10px' }}
                                options={aircraftOptions}
                            >
                            </Dropdown>
                        </span>


                        <span className="displayPerPage">Per page:</span>
                        <Menu compact>
                            <Dropdown onChange={handleFilterAmount} style={{ backgroundColor: '#e6e6e6' }} text={imagesPerPage} options={tagOptions} simple item />
                        </Menu>

                    </div>
                </Row>
                <Loader active={isLoading} inline='centered' size="small">Loading</Loader>
                <span className="gallery">
                    <Row style={{ marginTop: '10px' }}>
                        <span className="portfolioButtons">
                            <Button onClick={handleClickPrev}><Icon name="chevron left"></Icon>Prev</Button>
                            <Button onClick={handleClickNext}>Next<Icon name="chevron right"></Icon></Button>
                        </span>
                        <Col>
                            <ResponsiveMasonry>
                                <Masonry gutter="3px">
                                    {displayedImages.map((image) => (
                                        <Image className="galleryImage" onLoad={handleImageLoad} as='a' href={`/image/${image.id}`} key={image.id} src={image.filename} />
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </Col>
                    </Row>
                    <span className="portfolioButtons">
                        <Button onClick={handleClickPrev}><Icon name="chevron left"></Icon>Prev</Button>
                        <Button onClick={handleClickNext}>Next<Icon name="chevron right"></Icon></Button>
                    </span>
                    <Row style={{ marginTop: '10px' }}>
                        <List className='portfolioPageNums' horizontal>
                            {pageNums.map((index) => (
                                <List.Item className="indexPageNums" onClick={() => handleIndexClick(index)}>{index}</List.Item>
                            ))}
                        </List>
                    </Row>
                </span>
            </Container>
        </div>
    );
};


export default Portfolio