import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

interface Props {
    addTask: () => void,
}

export const ButtonTask: React.FC<Props> = ({ addTask }) => {
    return (
        <Stack direction="row" spacing={2} sx={{ m: 1 }}>
            <Button variant="contained" endIcon={<SendIcon />} onClick={addTask}>
                Add
            </Button>
        </Stack>
    )
}
