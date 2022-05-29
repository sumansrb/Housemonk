import * as React from "react";
import gitimg from "../images/git.png";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/loading";

export default function RecipeReviewCard() {
  const navigate = useNavigate();
  const [userName, setUserName] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const searchUser = async () => {
    try {
      const usersData = await axios.get(
        `https://api.github.com/search/users?q=${userName}&page=1&per_page=100`
      );
      setLoading(false);
      return usersData.data.items;
    } catch (error) {
      console.log(error);
      setLoading(false);
      // return alert("Error!");
    }
  };

  React.useEffect(() => {
    searchUser();
  }, []);

  const handleSearch = async (e) => {
    if (e && e.key === "Enter") {
      searchUser()
        .then(async (usersData) => {
          console.log(usersData);
          setUsers(usersData);
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <Card style={{ margin: "auto", padding: "10px" }}>
      <div style={{ backgroundColor: "#F2F2F2" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#F2F2F2" }} aria-label="recipe">
              <img alt="avatar" src={gitimg} style={{ width: "80%" }}></img>
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
              />
            </div>
            <button onClick={() => setUserName("")} className="sp">
              X
            </button>
          </div>
        </div>
      </div>
      <CardContent>
        <div style={{ minHeight: "70vh" }} className="row">
          {users.length > 0 ? (
            <div className="col">
              {users.map((user) => (
                <Card
                  key={user.id}
                  style={{ cursor: "pointer", margin: "10px" }}
                  onClick={() => navigate(`/user/${user.id}`)}
                >
                  <CardHeader
                    avatar={
                      <Avatar
                        sx={{ bgcolor: "white", marginBottom: "2.5rem" }}
                        aria-label="recipe"
                        src={user.avatar_url}
                      >
                        <AccountCircleIcon
                          fontSize="large"
                          clasName="avt"
                          style={{ color: "rgb(57, 119, 252)" }}
                        />
                      </Avatar>
                    }
                    title={<p style={{ marginTop: "1rem" }}>{user.login}</p>}
                    subheader={
                      <>
                        <p style={{ fontSize: ".7rem" }}>@{user.login}</p>
                        <p style={{ fontSize: ".7rem" }}>{user.type}</p>
                      </>
                    }
                  />
                </Card>
              ))}
            </div>
          ) : (
            <div style={{ minHeight: "70vh" }} className="text-center">
              No Users found!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
