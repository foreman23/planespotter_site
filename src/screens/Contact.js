import { Icon, Image, List } from "semantic-ui-react";
import { Container, Row, Col } from 'react-bootstrap';

import headImg from '../images/headshot.webp';


const About = (props) => {

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Contact Me</h2>
            <Row>
              <Col>
                <a rel='noreferrer' target={'_blank'} href="https://www.instagram.com/king_julian97/"><Icon name="instagram"></Icon></a>
              </Col>
              <Col>
                <a href='mailto:julianelnasser@gmail.com'><Icon name='mail'></Icon></a>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
            <div className="contactinfoCard">
              <Row>
              <Col><Image src={headImg}></Image></Col>
              <Col>
                <h2>Julian Elnasser</h2>
                <List>
                  <List.Item>
                    <List.Icon name="phone"></List.Icon>
                    <List.Content>818-397-2305</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail"></List.Icon>
                    <List.Content>julianelnasser@gmail.com</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="instagram"></List.Icon>
                    <List.Content>@king_julian97</List.Content>
                  </List.Item>
                </List>
              </Col>
              </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About