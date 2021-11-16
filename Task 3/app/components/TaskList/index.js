/**
 *
 * TaskList
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Grid, Typography, Card, CardContent, TextField, Button } from '@mui/material';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TaskList({ title }) {
  const [lists, setLists] = useState([]);
  const handleChange = (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      setLists([...lists, Object.assign({ id: Math.random(), name: e.target.value, completed: false })]);
      e.target.value = '';
    }
  }

  const handleTaskStatus = (id) => {
    setLists((lists || []).map(t => t.id.toString() === id.toString() ? Object.assign({}, t, { completed: !t.completed }) : t));
  }

  return (
    <Card>
      <CardContent>
        <Grid item xs={12}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cardTitle"
            label=""
            variant="filled"
            onKeyDown={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {(lists || []).map((list, key) => (
              <Grid key={key} item xs={12} style={{ textAlign: 'center' }}>
                <Button variant="outlined" style={{ marginTop: '14px', width: '100%' }} onClick={() => handleTaskStatus(list.id)}>{list.completed && list.name ? <strike>{list.name}</strike> : list.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

TaskList.propTypes = {};

export default memo(TaskList);
