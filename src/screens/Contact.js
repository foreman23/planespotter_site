import { Icon, Image, List, Card } from "semantic-ui-react";
import { Container, Row, Col } from 'react-bootstrap';

import headImg from '../images/headshot.webp';


const About = (props) => {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Contact Me</h2>
          </Col>
          <Col>
            <Row>
              <Card>
                <Image src={headImg}></Image>
                <Card.Content>
                  <Card.Header>Julian Elnasser</Card.Header>
                  <List>
                    <List.Item><Icon name="phone"></Icon>818-397-2305</List.Item>
                    <List.Item><Icon name="mail"></Icon>julianelnasser@gmail.com</List.Item>
                    <List.Item><Icon name="instagram"></Icon>@king_julian97</List.Item>
                  </List>
                </Card.Content>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About