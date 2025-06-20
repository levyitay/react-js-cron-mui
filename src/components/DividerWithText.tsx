import React from "react";
import { Box } from '@mui/material'

const DividerWithText = ({ children }:any) => {
  const line = (
    <Box
      component="div"
      sx={{
        borderBottom: "2px solid lightgray",
        width: "100%"
      }}
    />
  )

  return (
    <Box component="div" sx={{ display: 'flex', alignItems: 'center' }}>
      {line}
      <Box
        component="span"
        sx={{
          py: 0.5,
          px: 2,
          fontWeight: 500,
          fontSize: 22,
          color: "lightgray"
        }}
      >
        {children}
      </Box>
      {line}
    </Box>
  );
};
export default DividerWithText;