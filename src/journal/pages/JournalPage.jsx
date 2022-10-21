import { IconButton, Typography } from "@mui/material"
import { AddOutlined, MailOutline } from "@mui/icons-material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../view"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam nesciunt dolorem facilis nulla, qui aliquam totam sapiente eos nostrum impedit, reiciendis officiis! Non numquam laudantium neque voluptatum, culpa nam.</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView/>

      <IconButton 
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
          <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
