import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { CgUnavailable } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoPersonRemoveOutline } from "react-icons/io5";
import { callData } from "../api/api";

const Card = ({ details }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await callData(details?.url);
        setData(res);
        setErr("");
        // console.log(res);
      } catch (err) {
        setErr(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="size-full border border-purple-700 rounded-lg dark:bg-gray-800 m-auto overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-700/50 cursor-pointer transition-all duration-300">
        <div className="bg-gray-700 h-[170px] rounded overflow-hidden flex items-center justify-center">
          {loading ? (
            <p className="text-gray-400">Loading...</p>
          ) : (
            <img
              src={data?.sprites.other.dream_world.front_default}
              alt="image"
              className="size-[90%] object-contain hover:scale-[115%] duration-500"
            />
          )}
        </div>
        <h5 className="capitalize px-3 mt-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data?.name}
        </h5>
        <div className="p-3 space-y-2">
          <span className="font-semibold">Abilties</span>
          <div className="flex flex-wrap gap-2">
            {data?.abilities?.map((el) => (
              <div
                className="text-sm bg-gray-600 w-fit px-3 py-1 rounded-[100px]"
                key={el.ability?.name}
              >
                {el.ability?.name}
              </div>
            ))}
          </div>
          <div className="flex *:flex-1">
            <p className="font-normal dark:text-gray-200">
              <span className="font-bold">Weight: </span>
              {data.weight}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-200">
              <span className="font-bold">Height: </span>
              {data.height}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
