import { List } from 'semantic-ui-react'

const Footer = (props) => {
    return (
      <div className='footerList'>
        <List horizontal>
          <List.Item>
            <a rel='noreferrer' target={'_blank'} href='https://www.instagram.com/king_julian97/'>
              <List.Icon style={{ fontSize: "40px", color: "#2D2D2D" }} size='large' name='instagram'></List.Icon>
            </a>
          </List.Item>
          <List.Item>
            <a href='mailto:julianelnasser@gmail.com'>
              <List.Icon style={{ fontSize: "40px", color: "#2D2D2D" }} size='large' name='mail'></List.Icon>
            </a>
          </List.Item>
        </List>
      </div>
    )
  }
  
  export default Footer