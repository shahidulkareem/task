/*
 * TaskList Messages
 *
 * This contains all the text for the TaskList component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TaskList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TaskList component!',
  },
});
