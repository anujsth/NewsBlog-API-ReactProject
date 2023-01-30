import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputPost } from "../../features/PostDetail/postSlice";
import { toggle } from "../../features/InputBox/inputSlice";

const Input = () => {
  const activeUser = useSelector((state) => state.loggedIn.loggedInUser);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Oct",
    "Dec",
  ];
  let date = new Date();
  let monVal = date.getMonth() + 1;
  let mon = months[monVal];
  const dispatch = useDispatch();
  const [postInput, setPostInput] = useState({
    title: "",
    paragraph: "",
    time: "",
    user: "",
  });
  // const [inputVal, setInputVal] = useState([]);

  const titleInput = (event) => {
    setPostInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
    setPostInput((prevState) => {
      return { ...prevState, user: activeUser.name };
    });
  };

  const paraInput = (event) => {
    setPostInput((prevState) => {
      return { ...prevState, paragraph: event.target.value };
    });
    setPostInput((prevState) => {
      return {
        ...prevState,
        time: `${mon} ${date.getDay()}, ${date.getFullYear()}`,
      };
    });
  };

  const inputSubmit = (event) => {
    event.preventDefault();

    console.log(postInput);
    postInput.title !== "" &&
      postInput.paragraph !== "" &&
      dispatch(inputPost({ postInput }));
    // setInputVal((prevState) => {
    //   return [...prevState, postInput];
    // }
    // );
    dispatch(toggle());
    setPostInput({ title: "", paragraph: "" });
  };

  const cancelInput = () => {
    dispatch(toggle());
  };

  return (
    <>
      <div className="py-5 ml-4 ">
        <form onSubmit={inputSubmit}>
          <div>
            <input
              className=" border-1 rounded-lg w-60 border-gray-500 px-2"
              required
              type="text"
              placeholder="enter title..."
              onChange={titleInput}
              value={postInput.title}
            />
          </div>
          <div className="py-2">
            <input
              required
              width="80rem"
              className=" border-1 rounded-lg w-80 border-gray-500 px-2 h-40"
              type="text"
              placeholder="enter interesting events..."
              onChange={paraInput}
              value={postInput.paragraph}
            />
          </div>
          {/* <div className="py-2">
            <input
              required
              width="80rem"
              className=" border-1 rounded-lg w-80 border-gray-500 px-2 h-40"
              type="file"
            />
          </div> */}
          <div className="text-center">
            <button
              className=" transform transition duration-500 bg-red-500 px-3 py-1 rounded-xl hover:scale-125 mr-2"
              onClick={cancelInput}
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" transform transition duration-500 bg-cyan-500 px-3 py-1 rounded-xl hover:scale-125"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Input;
