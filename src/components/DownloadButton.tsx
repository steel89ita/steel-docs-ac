import * as React from "react"
import Button from "@mui/material/Button"
import DownloadIcon from "@mui/icons-material/Download"
import Stack from "@mui/material/Stack"

export default function DownloadButton(props) {
  return (
    <Stack direction='row' spacing={2}>
      <Button variant='contained' color='success' endIcon={<DownloadIcon />} href={props.link}>
        {props.children}
      </Button>
    </Stack>
  )
}
