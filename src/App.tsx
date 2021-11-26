import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './App.css';
import { ButtonTask } from './components/ButtonTask';
import InputBox from './components/InputBox';
import ListTask from './components/ListTask';

interface State {
  taskName: string;
  taskDescription: string;
}

function App() {

  const [values, setValues] = React.useState<State>({
    taskName: '',
    taskDescription: ''
  });

  const handleChange =
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };

  return (
    <div className="App">
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>

        <Grid container direction="row" spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <InputBox idName='taskName' label={'Task name'} initValue={values.taskName} handleChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <InputBox idName='taskDescription' label={'Task Description'} initValue={values.taskDescription} handleChange={handleChange} />
          </Grid>
          <Grid item xs={4}>
            <ButtonTask
              addTask={() => console.log(`${values.taskName} -- ${values.taskDescription}`)} />
          </Grid>
        </Grid>

        <ListTask />
      </Box>
    </div>
  );
}

export default App;