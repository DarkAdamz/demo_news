
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsItem = (props) => {
    return(
      <div className='mb-3 d-inline-block mx-3 my-3 px-2 py-2 bg-dark-subtle text-light'>
    <Card style={{ maxWidth: '345px' }}>
      <Card.Img variant="top" src={props.src} style={{height:'200px', width: '345px'}} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button className="text-light btn btn-primary" href={props.url}>See More...</Button>
      </Card.Body>
    </Card>
        </div>
  );
}

export default NewsItem;