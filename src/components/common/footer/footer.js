import React from "react";
import { makeStyles, BottomNavigation } from "@material-ui/core";
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "#D0C50A",
    position: "fixed",
    bottom: 0
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                  <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                  <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}{" "}
    </BottomNavigation>
  );
}
