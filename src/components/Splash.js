import { Container, Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';

import splashImg from '../images/splashTextLight.webp';

const Splash = (props) => {
    return (
      <div className='splash'>
        <Container fluid>
          <Row>
          <Image style={{width: '500px', display: 'flex', justifyContent: 'center', margin: 'auto'}} src={splashImg}></Image>
          </Row>
          <Row>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default Splash