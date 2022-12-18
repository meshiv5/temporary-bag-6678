import Carousel from "../../components/Carousel";
import Section from "../../components/Section";
import getHomePageData from "../../utils/getHomePageData";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import Loading from "./loading";
import { useRouter } from "next/router";
const axios = require("axios");
export default function Parts({ carouselData, buckets, queryPart }) {
  console.log(buckets);
  const [bucketsData, setBucketsData] = useState([...buckets]);
  const [currPage, setCurrPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMoreData = async (page) => {
    try {
      const response = await axios.get(
        `https://gwapi.zee5.com/content/collection/0-8-${queryPart}?page=${page}&limit=5&item_limit=20&country=IN&translation=en&languages=en,hi&version=10`,
        {
          headers: {
            "x-access-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJXZWJAJCF0Mzg3MTIiLCJpc3N1ZWRBdCI6IjIwMjItMTItMTNUMDc6NTY6MTUuODQ0WiIsInR0bCI6ODY0MDAwMDAsImlhdCI6MTY3MDkxODE3NX0.TTipy5H3Giur8XlJjF4YhrfXhJPMvSh87fAO9F1-9sg",
          },
        }
      );
      let data = await response.data;
      setBucketsData((d) => [...d, ...data.buckets]);
      setCurrPage(currPage + 1);
    } catch (e) {
      setHasMore(false);
      return;
    }
  };
  return (
    <div>
      <Carousel carouselData={carouselData} queryPart={queryPart} />
      <InfiniteScroll
        dataLength={bucketsData.length}
        next={() => {
          getMoreData(currPage);
        }}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {bucketsData.map((bucket) => {
          return <Section key={bucket.id + Math.random() * 100} sectionData={bucket} queryPart={queryPart} />;
        })}
      </InfiniteScroll>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  let queryPart = query.parts;
  
  if (queryPart) {
    try {
      const resp = await getHomePageData(queryPart);
      const data = await resp.data;
      let carouselData = data.buckets[0].items;
      let buckets = data.buckets;
      return {
        props: { carouselData, buckets, queryPart },
      };
    } catch (e) {
      return {
        notFound: true,
      };
    }
  } else {
    return {
      notFound: true,
    };
  }
}
