import { MailOutline } from "@mui/icons-material"
import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView, NoteView } from "../view"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam nesciunt dolorem facilis nulla, qui aliquam totam sapiente eos nostrum impedit, reiciendis officiis! Non numquam laudantium neque voluptatum, culpa nam.</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView/>
    </JournalLayout>
  )
}
