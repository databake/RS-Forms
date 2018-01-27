import { StackNavigator } from 'react-navigation';

import Joblist from './scenes/JobList';
import Job from './scenes/Job';
import Signature from './scenes/Signature';
import CameraViewFinder from './scenes/CameraViewFinder';
import Scanner from './scenes/Scanner';
import PhotoPicker from './scenes/PhotoPicker';
import ActivateBox from './scenes/ActivateBox'

const stackNavigatorConfig = {
  initialRouteName: 'Joblist',
};

export default StackNavigator(
  {
    Joblist: { screen: Joblist },
    Job: { screen: Job },
    Signature: { screen: Signature },
    CameraViewFinder: { screen: CameraViewFinder },
    Scanner: { screen: Scanner },
    PhotoPicker: { screen: PhotoPicker },
    ActivateBox: { screen: ActivateBox },
  },
  stackNavigatorConfig
);
