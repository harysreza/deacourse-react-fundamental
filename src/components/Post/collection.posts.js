import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Loaders from "../../Utils/Loaders";
import ModalPopup from "./modal.posts";

const PostCollection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(6);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState([]);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
      })
        .then((res) => setDatas(res.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = () => {
    setLimit((prevLimit) => prevLimit + 3);
  };

  const getData = (id, title, body) => {
    let tempData = [id, title, body];
    setTempData([...tempData]);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <Container>
        <Row>
          {datas.map((data, i) => {
            return (
              <Col key={i}>
                <Card
                  style={{ minWidth: "19rem", minHeight: "11rem" }}
                  className="m-3 shadow bg-dark"
                >
                  <Card.Body className="d-flex flex-column text-white">
                    <Card.Title>{data.title}</Card.Title>
                    <Button
                      variant="info"
                      className="w-25 mt-auto align-self-end"
                      onClick={() => {
                        getData(data.id, data.title, data.body);
                        setModalShow(true);
                      }}
                    >
                      Detail
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <ModalPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
        postid={tempData[0]}
        title={tempData[1]}
        body={tempData[2]}
      />
      <div className="d-flex justify-content-center mt-5 pb-5">
        <Button
          variant="dark"
          onClick={handleLimit}
          style={{ fontSize: "1.5rem" }}
        >
          Load More Post
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PostCollection;
