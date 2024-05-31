import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import {
  CardBody,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  Image,
  ListGroupItem,
} from "react-bootstrap";

export default function Cards() {
  return (
    <>
      <div className="flex flex-col items-center cards pt-12 pb-12 mb-1 h-full">
        <div className="flex flex-col md:flex-row gap-12 mb-8">
          {" "}
          <Card style={{ width: "18rem" }} className="card">
            <CardImg
              as={Image}
              src="/baconburgers.jpg"
              variant="top"
              fluid={true}
              alt="bacon burgers"
              className="cardImg"
            />

            <CardBody>
              <CardTitle className="cardText">Bacon Burgers</CardTitle>
              <CardText></CardText>
            </CardBody>

            <CardBody>
              <CardLink className="cardText" href="#">
                View More
              </CardLink>
            </CardBody>
          </Card>{" "}
          <Card style={{ width: "18rem" }} className="card">
            <CardImg
              as={Image}
              src="/frenchtoast.jpg"
              variant="top"
              fluid={true}
              alt="french toast"
              className="cardImg"
            />

            <CardBody>
              <CardTitle className="cardText">French Toast</CardTitle>
              <CardText></CardText>
            </CardBody>

            <CardBody>
              <CardLink className="cardText" href="#">
                View More
              </CardLink>
            </CardBody>
          </Card>{" "}
          <Card style={{ width: "18rem" }} className="card">
            <CardImg
              as={Image}
              src="/friedchicken.jpg"
              variant="top"
              fluid={true}
              alt="fried chicken"
              className="cardImg"
            />

            <CardBody>
              <CardTitle className="cardText">Fried Chicken</CardTitle>
              <CardText></CardText>
            </CardBody>

            <CardBody>
              <CardLink className="cardText" href="#">
                View More
              </CardLink>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row  gap-12">
          {" "}
          <Card style={{ width: "18rem" }} className="card">
            <CardImg
              as={Image}
              src="/fries.jpg"
              variant="top"
              fluid={true}
              alt="french fries"
              className="cardImg"
            />

            <CardBody>
              <CardTitle className="cardText">French Fries</CardTitle>
              <CardText></CardText>
            </CardBody>

            <CardBody>
              <CardLink className="cardText" href="#">
                View More
              </CardLink>
            </CardBody>
          </Card>{" "}
          <Card style={{ width: "18rem" }} className="card">
            <CardImg
              as={Image}
              src="/pancakes.jpg"
              variant="top"
              fluid={true}
              alt="pancakes"
              className="cardImg"
            />

            <CardBody>
              <CardTitle className="cardText">Pancakes</CardTitle>
              <CardText></CardText>
            </CardBody>

            <CardBody>
              <CardLink className="cardText" href="#">
                View More
              </CardLink>
            </CardBody>
          </Card>{" "}
          <Card style={{ width: "18rem" }} className="card">
            <CardImg
              as={Image}
              src="/spaghetti.jpg"
              variant="top"
              fluid={true}
              alt="spaghetti"
              className="cardImg"
            />

            <CardBody>
              <CardTitle className="cardText">Spaghetti</CardTitle>
              <CardText></CardText>
            </CardBody>

            <CardBody>
              <CardLink className="cardText" href="#">
                View More
              </CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
