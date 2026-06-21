import { Stack } from 'expo-router';
import { colors } from '../../lib/theme';

export default function QuizLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="config"
      />
      <Stack.Screen
        name="attempt"
        options={{
          gestureEnabled: false, // Prevent swiping back during quiz
        }}
      />
      <Stack.Screen
        name="result"
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack>
  );
}
