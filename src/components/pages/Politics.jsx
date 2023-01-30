import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { newsCollection } from "../../features/PoliticsNews/politicSlice";
import Loading from "../News/Loading";
import PoliticsNews from "../News/PoliticsNews";

const Politics = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const dataFetcher = async () => {
      setIsLoading(true);
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Apple&from=2023-01-18&sortBy=popularity&apiKey=dac421f1a9a343138c19d5fa5aacdb1d"
      );
      const newsData = await response.data.articles;
      dispatch(newsCollection({ newsData }));
      setIsLoading(false);
    };
    dataFetcher();
  }, []);
  // axios
  //   .get(
  //     "https://newsapi.org/v2/everything?q=Apple&from=2023-01-18&sortBy=popularity&apiKey=dac421f1a9a343138c19d5fa5aacdb1d"
  //   )
  //   .then((response) => {
  //     setIsLoading(true);
  //     const newsData = response.data.articles;
  //     dispatch(newsCollection({ newsData }));
  //     setIsLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading && <PoliticsNews />}
    </div>
  );
};

export default Politics;
