import React from "react";
import { FaLock } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import {
  FormControl,
  InputGroup,
  Container,
  Row,
  Col,
  Image,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
class MessageHeader extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "170px",
          border: ".2rem solid #ececec",
          borderRadius: "4px",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h3>
                <FaLock /> ChatRoomName <MdFavorite />
              </h3>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <AiOutlineSearch />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={this.props.handleSearchChanges}
                  placeholder="Search Messages"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p>
              <Image src="" /> user name
            </p>
          </div>
          <Row>
            <Col>
              <Accordion>
                <Card>
                  <Card.Header style={{ padding: "0 1rem" }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Click me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col>
              <Accordion>
                <Card>
                  <Card.Header style={{ padding: "0 1rem" }}>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Click me!
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MessageHeader;
