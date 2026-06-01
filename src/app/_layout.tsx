import { useEffect } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { initDatabase } from '../db/client';
import { colors } from '../lib/theme';

export default function RootLayout() {
  useEffect(() => {
    initDatabase().catch(console.error);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="learn/[topicId]"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: colors.textInverse,
            headerTitle: '',
          }}
        />
        <Stack.Screen
          name="learn/lesson/[subtopicId]"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colors.surface },
            headerTintColor: colors.textPrimary,
            headerTitle: '',
          }}
        />
      </Stack>
    </View>
  );
}
