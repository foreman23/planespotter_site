import { Image, Button, Loader, Icon, List, Label, Card } from "semantic-ui-react";
import { Container, Row, Col } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { useState } from "react";
import PortFilterBar from '../components/PortFilterBar';

import img1 from '../images/portfolio/webp/IMG_1128.webp';
import img2 from '../images/portfolio/webp/IMG_1426.webp';
import img3 from '../images/portfolio/webp/IMG_1428.webp';
import img4 from '../images/portfolio/webp/IMG_1476.webp';

import img5 from '../images/portfolio/webp/IMG_2821.webp';
import img6 from '../images/portfolio/webp/IMG_2946.webp';
import img7 from '../images/portfolio/webp/IMG_4110.webp';
import img8 from '../images/portfolio/webp/IMG_4248.webp';

import img9 from '../images/portfolio/webp/IMG_4289.webp';
import img10 from '../images/portfolio/webp/IMG_4290.webp';
import img11 from '../images/portfolio/webp/IMG_4344.webp';
import img12 from '../images/portfolio/webp/IMG_4862.webp';

import img13 from '../images/portfolio/webp/IMG_5151.webp';
import img14 from '../images/portfolio/webp/IMG_6633.webp';
import img15 from '../images/portfolio/webp/IMG_7655.webp';
import img16 from '../images/portfolio/webp/IMG_7740.webp';

import img17 from '../images/portfolio/webp/IMG_9100.webp';
import img18 from '../images/portfolio/webp/IMG_9173.webp';
// ** IMPLEMENT PAGES LESS THAN 9
//import img19 from '../images/portfolio/webp/IMG_9176.webp';
//import img20 from '../images/portfolio/webp/IMG_9188.webp';

//import img21 from '../images/portfolio/webp/IMG_9239.webp';
//import img22 from '../images/portfolio/webp/IMG_9593.webp';

const images = [
    {
        id: 1,
        filename: img1,
        title: 'Image 1',
        description: 'This is the first image'
    },
    {
        id: 2,
        filename: img2,
        title: 'Image 2',
        description: 'This is the second image'
    },
    {
        id: 3,
        filename: img3,
        title: 'Image 3',
        description: 'This is the first image'
    },
    {
        id: 4,
        filename: img4,
        title: 'Image 4',
        description: 'This is the second image'
    },
    {
        id: 5,
        filename: img5,
        title: 'Image 5',
        description: 'This is the first image'
    },
    {
        id: 6,
        filename: img6,
        title: 'Image 6',
        description: 'This is the second image'
    },
    {
        id: 7,
        filename: img7,
        title: 'Image 7',
        description: 'This is the second image'
    },
    {
        id: 8,
        filename: img8,
        title: 'Image 8',
        description: 'This is the first image'
    },
    {
        id: 9,
        filename: img9,
        title: 'Image 9',
        description: 'This is the second image'
    },
    // ------------------------------------------------------
    {
        id: 10,
        filename: img10,
        title: 'Image 10',
        description: 'This is the first image'
    },
    {
        id: 11,
        filename: img11,
        title: 'Image 11',
        description: 'This is the second image'
    },
    {
        id: 12,
        filename: img12,
        title: 'Image 12',
        description: 'This is the first image'
    },
    {
        id: 13,
        filename: img13,
        title: 'Image 13',
        description: 'This is the second image'
    },
    {
        id: 14,
        filename: img14,
        title: 'Image 14',
        description: 'This is the first image'
    },
    {
        id: 15,
        filename: img15,
        title: 'Image 15',
        description: 'This is the second image'
    },
    {
        id: 16,
        filename: img16,
        title: 'Image 16',
        description: 'This is the second image'
    },
    {
        id: 17,
        filename: img17,
        title: 'Image 17',
        description: 'This is the first image'
    },
    {
        id: 18,
        filename: img18,
        title: 'Image 18',
        description: 'This is the second image'
    },
    // ------------------------------------------------------
];


const Portfolio = (props) => {

    // Handles displaying images
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 12;

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

    return (
        <div>
            <Container>
                <Row>
                    <PortFilterBar></PortFilterBar>
                </Row>
                <Loader active={isLoading} inline='centered' size="small">Loading</Loader>
                <span className="gallery">
                    <Row>
                        <Col className="porfolioButtons" xs={1}>
                            <Button onClick={handleClickPrev}><Icon name="chevron left"></Icon></Button>
                        </Col>
                        <Col>
                            <ResponsiveMasonry>
                                <Masonry gutter="0px">
                                    {displayedImages.map((image) => (
                                        <Card className="galleryCard" style={{width: '100%'}}>
                                            <Image onLoad={handleImageLoad} as='a' href="/portfolio" key={image.id} src={image.filename} />
                                            <Card.Content style={{backgroundColor: '#e6e6e6'}}>
                                                <Card.Description style={{textAlign: 'center'}}>
                                                    {image.description}
                                                </Card.Description>
                                            </Card.Content>
                                        </Card>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </Col>
                        <Col className="porfolioButtons" xs={1}>
                            <Button onClick={handleClickNext}><Icon name="chevron right"></Icon></Button>
                        </Col>
                    </Row>
                    <Row>
                        <List className='portfolioPageNums' horizontal>
                            {pageNums.map((index) => (
                                <List.Item><Button onClick={() => handleIndexClick(index)}>{index}</Button></List.Item>
                            ))}
                        </List>
                    </Row>
                </span>
            </Container>
        </div>
    );
};


export default Portfolio