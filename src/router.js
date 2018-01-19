import { StackNavigator } from 'react-navigation';

import Joblist from './scenes/JobList';
import Job from './scenes/Job';
import Signature from './scenes/Signature';
import CameraViewFinder from './scenes/CameraViewFinder';

const stackNavigatorConfig = {
  initialRouteName: 'Joblist',
};

export default StackNavigator(
  {
    Joblist: { screen: Joblist },
    Job: { screen: Job },
    Signature: { screen: Signature },
    CameraViewFinder: { screen: CameraViewFinder },
  },
  stackNavigatorConfig
);
