import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout variant='h1' >
      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a laborum vitae, deserunt est explicabo! Ratione explicabo, facere, voluptate cumque tempore esse veniam sequi, laudantium suscipit sed dignissimos impedit! Unde!</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>
          <AddOutlined sx={{ fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
