import Card from 'react-bootstrap/Card';

function TourCard({ title, location, image, price }) {
  return (
    <Card style={{ width: '18rem', marginInline: 5, border: 'none' }}>
      <Card.Img variant="center" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{location}</Card.Text>
        <Card.Text>R${price} /pessoa</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TourCard;