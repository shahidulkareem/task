/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Grid, Container } from '@mui/material';
import messages from './messages';
import CreateCard from 'components/CreateCard';
import TaskList from 'components/TaskList';


export default function HomePage() {
  const [cards, setCards] = useState([]);

  const handleCards = (val) => {
    console.log('value', val);
    setCards([...cards, val]);
  }

  return (
    <Container style={{ padding: '25px' }}>
      <Grid container spacing={2}>
        {(cards || []).map((title, key) => (
          <Grid key={key} item>
            <TaskList title={title} />
          </Grid>
        ))}
        <Grid item><CreateCard handleCards={handleCards} /></Grid>
      </Grid>
    </Container>
  );
}
