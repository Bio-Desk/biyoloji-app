import { useEffect } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { initDatabase } from '../db/client';
import { useScreenCapturePrevention } from '../hooks/useScreenCapturePrevention';
import { colors } from '../lib/theme';

export default function RootLayout() {
  useScreenCapturePrevention();

  useEffect(() => {
    initDatabase().catch(console.error);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Stack initialRouteName="welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="learn/[topicId]" />
        <Stack.Screen name="learn/lesson/[subtopicId]" />
      </Stack>
    </View>
  );
}
