import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.substudio.app',
  appName: 'SubStudio',
  webDir: 'out',
  server: {
    url: 'https://substudio.vercel.app',
    cleartext: true
  }
};

export default config;
