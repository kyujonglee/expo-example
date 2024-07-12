import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import * as React from 'react';
import { Button, View } from 'react-native';

export default function SignUpScreen() {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const handleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('(tabs)'),
      });

      if (createdSessionId) {
        if (setActive) {
          await setActive({ session: createdSessionId });
        }
      }
    } catch (err: any) {}
  };

  return (
    <View>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}
