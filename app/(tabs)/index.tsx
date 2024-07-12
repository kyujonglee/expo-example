import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Page() {
  const { user, isSignedIn } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();
  console.log('home', isSignedIn);

  return (
    <View>
      <Text>isSignedIn : {isSignedIn ? 'true' : 'false'}</Text>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Text
          onPress={async () => {
            await signOut();
            router.replace('/sign-in');
          }}>
          SignOut~
        </Text>
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in" replace>
          <Text>Sign In</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
