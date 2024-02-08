import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views/NothingSelectedView"
import { NoteView } from "../views/NoteView"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { startNewNote } from "../../store/journal"
import { useSelector } from "react-redux"

export const JournalPage = () => {

  const { isSaving, active } = useSelector( state => state.journal )
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout variant='h1' >
      {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a laborum vitae, deserunt est explicabo! Ratione explicabo, facere, voluptate cumque tempore esse veniam sequi, laudantium suscipit sed dignissimos impedit! Unde!</Typography> */}
      
      {
        (active) 
        ? <NoteView />
        : <NothingSelectedView /> 
      }
      

      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
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
