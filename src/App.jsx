import axios from "axios";
import React, { useEffect, useState } from "react";
import Buttons from "./component/buttons";
import Cards from "./component/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getApi = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=15`,
    );
    const data = response.data;
    setUserData(data);
  };
  useEffect(() => {
    getApi();
  }, [page]);
  let printUserData = (
    <h3 className="text-gray-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      Loading.....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return <Cards elem={elem} key={idx} />;
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto">
      <div className="flex flex-wrap h-[90%] overflow-auto">
        {printUserData} {page}
      </div>
      <Buttons setPage={setPage} setUserData={setUserData} page={page} />
    </div>
  );
};

export default App;
