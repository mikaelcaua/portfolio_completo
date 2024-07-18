import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BotaoProjeto({href}:{href:string}) {
  return (
    <Stack spacing={2} direction="row">
      <a target="_blank" href={href}><Button variant="contained" className="bg-button_color font-semibold ">VISIT PROJECT</Button></a>
    </Stack>
  );
}
