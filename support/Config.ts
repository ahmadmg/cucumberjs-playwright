import { LaunchOptions } from '@playwright/test';
import 'dotenv/config';
const browserOptions: LaunchOptions = {
  headless: process.env.HEADLESS === 'true',
  slowMo: 0,
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
};

export const config = {
  browser: process.env.BROWSER || 'chromium',
  browserOptions,
  BASE_URL: process.env.BASE_URL || 'https://google.com',
  API_URL: process.env.API_URL || `https://google.com`,
  IMG_THRESHOLD: { threshold: 0.4 },
}
