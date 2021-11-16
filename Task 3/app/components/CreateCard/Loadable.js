/**
 *
 * Asynchronously loads the component for CreateCard
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
