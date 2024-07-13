import React, { useEffect, useState } from "react";
import { callData } from "../api/api";
import Card from "./Card";
import { useSearchContext } from "../contexts/SearchContext";

const Cards = () => {
  const [data, setData] = useState([]);
  const [res, setRes] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(true);

  const { searchQuery } = useSearchContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await callData(`https://pokeapi.co/api/v2/pokemon`);
        setRes(response);
        setData(response.results);
        setErr("");
      } catch (err) {
        setErr(err.message);
        setRes(response);
        setData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    setSearchResults(() =>
      data?.filter((el) => el.name.toLowerCase().includes(searchQuery))
    );
  }, [searchQuery]);

  // const handleLoadMore = async () => {
  //   const response = await callData(res?.next);
  //   setRes(response);
  //   console.log(response.results);
  //   setData((prev) => [...prev, response.results]);
  // };

  if (loading) {
    return <h1 className="text-center text-xl">Wait...</h1>;
  }

  if (err) {
    return <h1 className="text-center text-xl">{err}</h1>;
  }

  return (
    <>
      <div className="my-10 space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {searchQuery
          ? searchResults?.map((el) => <Card details={el} key={el.name} />)
          : data?.map((el) => <Card details={el} key={el.name} />)}
      </div>
      {/* <button
        className="w-full py-3 bg-gray-700 rounded-lg mb-10"
        onClick={handleLoadMore}
      >
        Load more
      </button> */}
    </>
  );
};

export default Cards;
