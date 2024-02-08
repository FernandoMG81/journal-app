import { TurnedInNot } from "@mui/icons-material";
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ id, title='', body, date, imageUrls=[] }) => {

  const dispatch = useDispatch()

  const formatedTitle = useMemo(() => {
    return title.length > 17
      ? `${title.slice(0, 16)}...`
      : title;
    }, [title]);

  const onClickNote = () => {
    dispatch( setActiveNote({ id, title, body, date, imageUrls }) )
  }


  return (
    <ListItem key={ id } disablePadding >
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid>
          <ListItemText primary={ formatedTitle } />
          <ListItemText secondary={ body }
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
