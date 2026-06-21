import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { initDatabase } from '../db/client';
import { useScreenCapturePrevention } from '../hooks/useScreenCapturePrevention';
import { colors } from '../lib/theme';
import { useAuthStore } from '../store/authStore';
import { useKvkkStore } from '../store/kvkkStore';

// TODO: Faz 2 testleri için giriş zorunluluğu geçici olarak devre dışı.
// Faz 3'e geçmeden önce false yapılmalı.
const SKIP_AUTH_FOR_TESTING = true;

export default function RootLayout() {
  useScreenCapturePrevention();

  const router = useRouter();
  const segments = useSegments();
  const status = useAuthStore((s) => s.status);
  const initialize = useAuthStore((s) => s.initialize);
  const kvkkAccepted = useKvkkStore((s) => s.accepted);
  const loadKvkk = useKvkkStore((s) => s.load);

  useEffect(() => {
    initDatabase().catch(console.error);
    initialize();
    loadKvkk();
  }, []);

  useEffect(() => {
    if (status === 'loading' || kvkkAccepted === null) return;

    const onWelcome = segments[0] === 'welcome';
    const inAuthGroup = segments[0] === '(auth)';

    if (status === 'authenticated') {
      if (onWelcome || inAuthGroup) router.replace('/(tabs)');
      return;
    }

    if (SKIP_AUTH_FOR_TESTING) {
      if (!kvkkAccepted) {
        if (onWelcome) return;
        if (segments[0] !== '(auth)' || segments[1] !== 'kvkk') {
          router.replace('/(auth)/kvkk');
        }
        return;
      }
      if (onWelcome || inAuthGroup) router.replace('/(tabs)');
      return;
    }

    if (status === 'needs-role') {
      if (segments[0] !== '(auth)' || segments[1] !== 'signup') {
        router.replace('/(auth)/signup');
      }
      return;
    }

    // status === 'unauthenticated'
    if (!kvkkAccepted) {
      if (onWelcome) return;
      if (segments[0] !== '(auth)' || segments[1] !== 'kvkk') {
        router.replace('/(auth)/kvkk');
      }
      return;
    }

    if (onWelcome || !inAuthGroup) {
      router.replace('/(auth)/login');
    }
  }, [status, kvkkAccepted, segments]);

  if (status === 'loading' || kvkkAccepted === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack initialRouteName="welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="learn/[topicId]" />
        <Stack.Screen name="learn/lesson/[subtopicId]" />
        <Stack.Screen name="accessibility" options={{ presentation: 'modal' }} />
      </Stack>
    </View>
  );
}

