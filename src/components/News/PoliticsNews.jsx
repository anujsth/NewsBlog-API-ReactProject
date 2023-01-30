import React, { useState } from "react";
import { useSelector } from "react-redux";
import PagitnationButton from "./PagitnationButton";

const PoliticsNews = () => {
  // const [button, setButton] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const news = useSelector((state) => state.politicNews.news);
  const slicedNews = sliceIntoChunks(news, 10);
  // const increamenter = (arg) => {
  //   // arg === 1 && setButton((prevState) => (prevState = prevState + 1));
  //   // arg === 2 && setButton((prevState) => (prevState = prevState + 2));
  //   // arg === 3 && setButton((prevState) => (prevState = prevState + 3));
  // };
  // const decreamenter = (arg) => {};
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div class="news-container">
        {slicedNews[currentPage]?.map((item) => (
          <div class="news-item" key={item.title}>
            <img
              src={item.urlToImage}
              alt="News 1"
              className="news-image"
              // height="8rem"
              // widht="8rem"
            />

            <div className="news-detail">
              <a href={item.url}>
                <h3 class="news-title">{item.title}</h3>
              </a>
              <p class="news-content">{item.description}</p>
            </div>
          </div>
        ))}

        {/* <div class="news-item">
        <img src="news2-image.jpg" alt="News 2" class="news-image" />
        <h3 class="news-title">News 2 Title</h3>
        <p class="news-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          magna a ullamcorper commodo, ipsum magna tincidunt ipsum, at
          pellentesque risus nibh a risus.{" "}
        </p>
      </div>
      <div class="news-item">
        <img src="news3-image.jpg" alt="News 3" class="news-image" />
        <h3 class="news-title">News 3 Title</h3>
        <p class="news-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
          magna a ullamcorper commodo, ipsum magna tincidunt ipsum, at
          pellentesque risus nibh a risus.{" "}
        </p>
      </div> */}
      </div>
      <PagitnationButton
        // button={button}
        currentPage={currentPage}
        totalPage={slicedNews.length}
        handlePageChange={handlePageChange}
        // increamentHandler={increamenter}
        // decreamentHandler={decreamenter}
      />
    </>
  );
};

export default PoliticsNews;
