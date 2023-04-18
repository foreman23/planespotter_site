import { Icon, Image, List, Card, Form, Header } from "semantic-ui-react";
import { Container, Row, Col } from 'react-bootstrap';

import headImg from '../images/headshot.webp';


const About = (props) => {

  return (
    <div>
      <Container className="contactContainer">
        <Row>
          <Col>
            <span className="contactCard">
              <Card>
                <Image src={headImg}></Image>
                <Card.Content>
                  <Card.Header>Julian Elnasser</Card.Header>
                  <List>
                    <List.Item href='tel:818-397-2305'><Icon style={{marginRight: '5px'}} name='phone'></Icon>818-397-2305</List.Item>
                    <List.Item href='mailto:julianelnasser@gmail.com'><Icon style={{marginRight: '5px', textDecoration: 'none'}} name='mail'></Icon>julianelnasser@gmail.com</List.Item>
                    <List.Item target='_blank' href='https://www.instagram.com/king_julian97/'><Icon style={{marginRight: '5px'}} name='instagram'></Icon>@king_julian97</List.Item>
                  </List>
                </Card.Content>
              </Card>
            </span>
          </Col>
          <Col className="contactForm">
            <span>
              <Form style={{width: '90%', justifyContent: 'center', margin: 'auto'}}>
                <Header as={'h2'}>Send me a message</Header>
                <Form.Input required placeholder='Full name*'></Form.Input>
                <Form.Input required placeholder='Email address*'></Form.Input>
                <Form.Input placeholder='Subject'></Form.Input>
                <Header as={'h6'}>Message</Header>
                <Form.TextArea></Form.TextArea>
                <Form.Button>Send</Form.Button>
              </Form>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About