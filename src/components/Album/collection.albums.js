import React, { useEffect, useState } from "react";
import axios from "axios";
import { ButtonGroup, Carousel } from "react-bootstrap";
import Loaders from "../../Utils/Loaders";

const AlbumCollection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((res) => setDatas(res.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }

    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prevLimit) => prevLimit + 1)
      : datas.length > 0
      ? setLimit((prevLimit) => prevLimit - 1)
      : setLimit((prevLimit) => prevLimit);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <Carousel>
        {datas.length > 0 ? (
          datas.map((data, i) => {
            return (
              <Carousel.Item key={i}>
                <img
                  className="d-block w-100"
                  src={data.url}
                  alt="First slide"
                  height={350}
                  width={200}
                  style={{ borderRadius: "0.5rem" }}
                />
                <Carousel.Caption>
                  <h3>{data.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })
        ) : (
          <h4 className="text-center py-5">CLICK “+” TO LOAD PHOTO</h4>
        )}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2 pb-5">
        <button className="btn btn-dark" onClick={() => handleLimit("+")}>
          +
        </button>
        <button className="btn btn-dark" onClick={() => handleLimit("-")}>
          -
        </button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default AlbumCollection;
