/**
 *
 * CreateCard
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CreateCard({ handleCards }) {

  const [cardInput, setCardInput] = useState(false);

  return (
    <Card>
      <CardContent>
        <Grid item xs={12}>
          <Typography component="div" variant="h5"><FormattedMessage {...messages.header} /></Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cardTitle"
            label=""
            variant="filled"
            onChange={(e) => setCardInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" style={{ marginTop: '14px' }} onClick={() => handleCards(cardInput)}>Create</Button>
        </Grid>
      </CardContent>
    </Card>
  );
}

CreateCard.propTypes = {};

export default memo(CreateCard);
