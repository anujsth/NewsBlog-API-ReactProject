import React, { useState } from "react";
import { BsPlusSquareDotted, BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/InputBox/inputSlice.js";
import { localPost, deletePost } from "../../features/PostDetail/postSlice.js";
import Input from "../Input/Input.jsx";
import { useEffect } from "react";

const Post = () => {
  const [postData, setPostData] = useState([]);
  const [reloader, setReloader] = useState(false);
  let data =
    localStorage.getItem !== null
      ? JSON.parse(localStorage.getItem("post"))
      : [];
  const inputToggle = useSelector((state) => state.inputToggle.toggleInput);
  // const postData = useSelector((state) => state.inputPost.detail);
  const dispatch = useDispatch();

  const deleteHandler = (val) => {
    dispatch(deletePost({ val }));
    data =
      localStorage.getItem("post") !== null
        ? JSON.parse(localStorage.getItem("post"))
        : [];
    setReloader(!reloader ? true : false);
    console.log(data);
  };

  useEffect(() => {
    dispatch(localPost({ data }));
  }, []);

  // useEffect(() => {
  //   window.addEventListener(
  //     "storage",
  //     () => {
  //       data =
  //         localStorage.getItem("post") !== null
  //           ? JSON.parse(localStorage.getItem("post"))
  //           : [];
  //     },
  //     [data]
  //   );

  //   // data =
  //   //   localStorage.getItem("post") !== null
  //   //     ? JSON.parse(localStorage.getItem("post"))
  //   //     : [];
  // }, []);
  return (
    <div className="pt-20 mx-14">
      <p className="text-center text-3xl text-gray-600">Blogs</p>

      <div className="mt-4 flex items-center cursor-pointer">
        <button
          onClick={() => {
            dispatch(toggle());
          }}
        >
          <BsPlusSquareDotted className="text-2xl hover:scale-110" />
        </button>
        <p className="ml-2 text-xl ">POST</p>
      </div>

      {inputToggle ? <Input /> : ""}
      {data !== null
        ? data.map((item, id) => (
            <div className="pt-10 md:flex" key={id}>
              <img
                src="cyber.jpg"
                className=" h-15 w-15 md:h-20 md:w-20 object-cover rounded-full"
              />
              <div
                className="mx-8 flex-1 flex items-center justify-between mb-20"
                width="100%"
              >
                <div>
                  <span className="font-bold text-gray-600">{item.user}</span>
                  <h1 className="text-2xl">{item.title}</h1>
                  <p className="text-lg text-gray-700">{item.paragraph}</p>
                </div>
                <div className="">
                  <p className="">{item.time}</p>
                  <BsFillTrashFill
                    className="mt-2 hover:text-red-600 hover:cursor-pointer text-lg transform"
                    // onClick={() => deleteHandler(item)}.
                    onClick={() => {
                      deleteHandler(item);
                    }}
                  />
                  {/* <button className="mt-2 bg-red-600 px-2 rounded-lg text-white">
                Delete
              </button> */}
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Post;
