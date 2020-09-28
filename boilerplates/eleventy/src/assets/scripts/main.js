import 'focus-visible';

// Internal Modules
import './modules/nav';
import {
  customInstallPrompt,
  handleNetworkChange,
  installPwa,
  installPwaDismiss,
  pwaInstallCta,
  pwaInstallDismiss,
} from './modules/pwa';

/**
 * Execute when whole page is loaded
 */
window.onload = function () {
  window.addEventListener('online', handleNetworkChange);
  window.addEventListener('offline', handleNetworkChange);
  window.addEventListener('beforeinstallprompt', customInstallPrompt);
  pwaInstallCta.addEventListener('click', installPwa);
  pwaInstallDismiss.addEventListener('click', installPwaDismiss);
};
