import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BioCard from "./BioCard";
import { getUserInfo } from "./helper/getUserInfo";

const BioPage = () => {
  const [userInfo, setUserInfo] = useState();
  const { user } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8000/api/getinfo/${user}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setUserInfo(data);
        }else{
            navigate("/oops")
        }
      });
  }, []);
  return (
    <div>
      {userInfo && (
        <div className="bio-page-gradient w-11/12 mx-auto flex justify-center p-2 my-14 rounded-xl md:w-6/12">
          <BioCard userInfo={userInfo} />
        </div>
      )}
    </div>
  );
};

export default BioPage;
