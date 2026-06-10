import { Alert, Platform } from 'react-native';

// Alert.alert is a no-op on react-native-web, so fall back to window.alert there
export function notify(message: string, title = 'Yakında') {
  if (Platform.OS === 'web') {
    if (typeof window !== 'undefined') window.alert(`${title}\n\n${message}`);
  } else {
    Alert.alert(title, message);
  }
}
