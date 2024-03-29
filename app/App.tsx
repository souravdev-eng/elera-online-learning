import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
  'new NativeEventEmitter',
]);

import React, {useEffect} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {StripeProvider} from '@stripe/stripe-react-native';

import MainNavigation from './src/navigation/MainNavigation';
import {persistor} from './src/store/store';
import {
  NotificationListener,
  requestUserPermission,
} from './src/utils/notificationConfig';
import {useFCMToken} from './src/hooks/useFCMToken';

const App = () => {
  const {updateFCMToken, getTokens, fcmToken, isFCMToken} = useFCMToken();
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
    getTokens();

    if (fcmToken !== null && isFCMToken === null) {
      updateFCMToken();
    }
  }, [fcmToken, isFCMToken]);

  return (
    <StripeProvider publishableKey="pk_test_51JOBJnSA4EPPqs66VxVusJrEerUnYWuDGHkzasE78kNncq9UgLx4PwQdU8XPpn41qwz1vhNsxcY14rSQ7fC0c0gt00lNQYG9wa">
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </StripeProvider>
  );
};

export default App;
