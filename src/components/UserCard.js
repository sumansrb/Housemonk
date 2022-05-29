import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";

export default function UserCard(props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "rgb(57, 119, 252)" }} aria-label="recipe">
            <PersonOutlineTwoToneIcon />
          </Avatar>
        }
        title={props.fullName}
        subheader={props.description ? props.description : "Not Available"}
      />
    </Card>
  );
}
