import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const ImageAvatars = () => {
  return (
    <Stack direction="row" spacing={10}>
      <Avatar alt="Aaranyak Santra" src="/me.jpeg" />
    </Stack>
  );
};

export default ImageAvatars;
