import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

const SubmissionsPageLeft = (props) => {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ background: "black" }}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Problem Title "
          secondary={props.data.problemTitle}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ background: "black" }}>
            <AssignmentTurnedInIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Status" secondary={props.data.status} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ background: "black" }}>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Submitted By " secondary={props.data.name} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ background: "black" }}>
            <HourglassBottomIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Submission Time "
          secondary={props.data.submissionTime}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ background: "black" }}>
            <FeaturedPlayListIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Language Of Submission"
          secondary={props.data.languageUsed}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar style={{ background: "black" }}>
            <AccessAlarmIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Run Time" secondary={props.data.RunTime} />
      </ListItem>
    </List>
  );
};

export default SubmissionsPageLeft;
