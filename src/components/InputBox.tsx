import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React from 'react'

interface InputBoxProps {
    label?: string;
    initValue: string;
    idName: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBox: React.FunctionComponent<InputBoxProps> = ({ label, initValue, handleChange, idName }) => {
    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor={`id${label}`}>{label}</InputLabel>
            <OutlinedInput
                id={`id${label}`}
                name={`${idName}`}
                value={initValue}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label={label}
            />
        </FormControl>
    );
}

export default InputBox;
