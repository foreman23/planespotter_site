import { Card, Image } from 'semantic-ui-react'

const BlogCard = (props) => {
    return (
        <a href='/'>
            <div className='blogCard'>
                <Card style={{ width: '100%' }}>
                    <Image src={props.image}></Image>
                    <Card.Content>
                        <Card.Meta>
                            <span className='cardDate'>{props.date}</span>
                        </Card.Meta>
                        <Card.Header>{props.title}</Card.Header>
                        <Card.Description>
                            {props.description}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </a>
    )
}

export default BlogCard