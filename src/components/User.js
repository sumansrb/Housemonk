import React from "react";
import "./User.css";
import profileImg from "../images/profile.png";
import backImg from "../images/back.png";
import { useNavigate } from "react-router-dom";
import Card from "./UserCard";

const User = () => {
  const navigate = useNavigate();
  const userData = [1, 2, 3];
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
        <div style={{ display: "flex", marginTop: "2.5rem" }}>
          <div>
            <div className="p-3">
              <img
                style={{
                  width: "70px",
                  border: "gray solid",
                  borderRadius: "5px",
                }}
                src={profileImg}
                alt="#"
              />
            </div>
          </div>
          <div
            className="px-1 py-3"
            style={{ marginTop: ".5rem", marginBottom: "2rem" }}
          >
            <div>
              <h3 style={{ color: "#73777B" }}>User Name</h3>
              <p style={{ color: "#73777B" }}>@handle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="p-2">
            <div style={{ color: "#73777B" }}>Bio</div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas blandit odio nec dolor rhoncus condimentum. Nullam et
                ligula nunc. Nulla ullamcorper fringilla nisl sit amet
                hendrerit. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <div style={{ color: "#73777B" }}>Works at</div>
            <div>
              <p>Lorem ipsum dolor sit amit.</p>
            </div>
            <div className="row">
              <div className="col">
                <div style={{ color: "#73777B" }}>Repositories</div>
                52
              </div>
              <div className="col">
                <div style={{ color: "#73777B" }}>Followers</div>
                259
              </div>
              <div style={{ color: "#73777B", marginTop: "20px" }}>
                Pinned Repositories
              </div>
            </div>
          </div>
          {userData.map((data) => (
            <div className="userCard p-2">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
