import * as React from "react";
import gitimg from "../images/git.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

export default function RecipeReviewCard() {
  const navigate = useNavigate();
  return (
    <Card style={{ margin: "auto", padding: "10px" }}>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#F2F2F2" }} aria-label="recipe">
              <img src={gitimg} style={{ width: "80%" }}></img>
            </Avatar>
          }
          title={
            <h4 style={{ marginTop: ".9rem", fontSize: "1.2rem" }}>
              GitHub Profile Viewer
            </h4>
          }
        />

        <div className="p-4">
          <div className="holder">
            <div className="icon">
              <SearchIcon />
            </div>
            <div className="input">
              <input
                placeholder="Search user"
                style={{ backgroundColor: "rgb(57, 119, 252)" }}
              />
            </div>
            <span className="sp">X</span>
          </div>
        </div>
      </div>
      <CardContent>
        <div className="row p-2">
          <div className="col-6">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                    aria-label="recipe"
                  >
                    <AccountCircleIcon
                      fontSize="large"
                      clasName="avt"
                      style={{ color: "rgb(57, 119, 252)" }}
                    />
                  </Avatar>
                }
                title={<p style={{ marginTop: "1rem" }}>User name</p>}
                subheader={
                  <p style={{ fontSize: ".7rem" }}>
                    @handle, work at description bio to be wrap and not than 3
                    lines
                  </p>
                }
              />
            </Card>
          </div>
          <div className="col-6 ">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                    aria-label="recipe"
                  >
                    <AccountCircleIcon
                      fontSize="large"
                      clasName="avt"
                      style={{ color: "rgb(57, 119, 252)" }}
                    />
                  </Avatar>
                }
                title={<p style={{ marginTop: "1rem" }}>User name</p>}
                subheader={
                  <p className="para" style={{ fontSize: ".7rem" }}>
                    @handle, work at description bio to be wrap and not than 3
                    lines
                  </p>
                }
              />
            </Card>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-6">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                    aria-label="recipe"
                  >
                    <AccountCircleIcon
                      fontSize="large"
                      clasName="avt"
                      style={{ color: "rgb(57, 119, 252)" }}
                    />
                  </Avatar>
                }
                title={<p style={{ marginTop: "1rem" }}>User name</p>}
                subheader={
                  <p className="para" style={{ fontSize: ".7rem" }}>
                    @handle, work at description bio to be wrap and not than 3
                    lines
                  </p>
                }
              />
            </Card>
          </div>
          <div className="col-6 ">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                    aria-label="recipe"
                  >
                    <AccountCircleIcon
                      fontSize="large"
                      clasName="avt"
                      style={{ color: "rgb(57, 119, 252)" }}
                    />
                  </Avatar>
                }
                title={<p style={{ marginTop: "1rem" }}>User name</p>}
                subheader={
                  <p className="para" style={{ fontSize: ".7rem" }}>
                    @handle, work at description bio to be wrap and not than 3
                    lines
                  </p>
                }
              />
            </Card>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-6">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                    aria-label="recipe"
                  >
                    <AccountCircleIcon
                      fontSize="large"
                      clasName="avt"
                      style={{ color: "rgb(57, 119, 252)" }}
                    />
                  </Avatar>
                }
                title={<p style={{ marginTop: "1rem" }}>User name</p>}
                subheader={
                  <p className="para" style={{ fontSize: ".7rem" }}>
                    @handle, work at description bio to be wrap and not than 3
                    lines
                  </p>
                }
              />
            </Card>
          </div>
          <div className="col-6 ">
            <Card
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/user")}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                    aria-label="recipe"
                  >
                    <AccountCircleIcon
                      fontSize="large"
                      clasName="avt"
                      style={{ color: "rgb(57, 119, 252)" }}
                    />
                  </Avatar>
                }
                title={<p style={{ marginTop: "1rem" }}>User name</p>}
                subheader={
                  <p style={{ fontSize: ".7rem" }}>
                    @handle, work at description bio to be wrap and not than 3
                    lines
                  </p>
                }
              />
            </Card>
          </div>
        </div>
      </CardContent>
      <p
        style={{ fontSize: ".9rem", color: "gray", marginLeft: "0.6rem" }}
        className="p-3"
      >
        Note: more search results should be lazy loaded as user scroll down
      </p>
    </Card>
  );
}
