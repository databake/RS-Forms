import React from 'react';
import { Router, Scene, Modal } from 'react-native-router-flux';

import JobList from './scenes/JobList';
import Job from './scenes/Job';
import CameraViewFinder from './scenes/CameraViewFinder';
import Signature from './scenes/Signature';
import Options from './scenes/Options';

export default () => (
  <Router>
    <Modal hideNavBar>
      <Scene key="root">
        <Scene key={'jobs'} title="Jobs" component={JobList} initial />
        <Scene key={'job'} title="Job" component={Job} />
      </Scene>
      <Scene key={'camera'} title="View Finder" component={CameraViewFinder} hideNavBar={false} />
      <Scene key={'signature'} title="Signature" component={Signature} hideNavBar={false} />
      <Scene key={'options'} title="Options" component={Options} hideNavBar={false} />
    </Modal>
  </Router>
);
