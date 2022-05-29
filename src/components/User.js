import React, { useEffect, useState } from "react";
import "./User.css";
import backImg from "../images/back.png";
import { useNavigate, useParams } from "react-router-dom";
import Card from "./UserCard";
import axios from "axios";
import Loading from "./loading";

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      if (userId) {
        const data = await axios.get(`https://api.github.com/user/${userId}`);
        const reposData = await axios.get(data.data.repos_url);
        setLoading(false);
        return { data: data.data, reposData: reposData.data };
      } else {
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
      return alert(error);
    }
  };

  useEffect(() => {
    console.log("hi");
    getData().then((data) => {
      setUserData(data.data);
      setReposData(data.reposData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="userPage">
      <div>
        <div className="p-3">
          <div style={{ display: "flex" }}>
            <div onClick={() => navigate("/")}>
              <img
                src={backImg}
                alt=""
                style={{ width: "20px", cursor: "pointer" }}
              />
            </div>
            <div
              onClick={() => navigate("/")}
              className="text-dark"
              style={{
                marginLeft: "10px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <p style={{ color: "#73777B" }}>Back</p>
            </div>
          </div>
        </div>
        {userData && (
          <div style={{ display: "flex", marginTop: "2.5rem" }}>
            <div>
              <div className="p-3">
                <img
                  style={{
                    width: "70px",
                    border: "gray solid",
                    borderRadius: "5px",
                  }}
                  src={userData.avatar_url}
                  alt="#"
                />
              </div>
            </div>
            <div
              className="px-1 py-3"
              style={{ marginTop: ".5rem", marginBottom: "2rem" }}
            >
              <div>
                <h3 style={{ color: "#73777B" }}>{userData.login}</h3>
                <p style={{ color: "#73777B" }}>@{userData.login}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      {userData && (
        <div className="card">
          <div className="card-body">
            <div className="p-2">
              <div style={{ color: "#73777B" }}>Bio</div>
              <div>
                <p>{userData.bio ? userData.bio : "Not Available"}</p>
              </div>
              <div style={{ color: "#73777B" }}>Works at</div>
              <div>
                <p>{userData.company || "Not provided"}</p>
              </div>
              <div className="row">
                <div className="col">
                  <div style={{ color: "#73777B" }}>Repositories</div>
                  {userData.public_repos}
                </div>
                <div className="col">
                  <div style={{ color: "#73777B" }}>Followers</div>
                  {userData.followers}
                </div>
                <div style={{ color: "#73777B", marginTop: "20px" }}>
                  {userData.pinned_repo
                    ? "Pinned Repositories"
                    : "Repositories"}
                </div>
              </div>
            </div>
            {reposData &&
              reposData.slice(0, 50).map((data) => (
                <div key={data.id} className="userCard p-2">
                  <Card fullName={data.name} description={data.description} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
