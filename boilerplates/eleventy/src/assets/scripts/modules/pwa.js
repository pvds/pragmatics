/* custom PWA installation triggers */
export const pwaInstallCta = document.getElementById('pwa-install-cta');
export const pwaInstallDismiss = document.getElementById('pwa-install-dismiss');

/* used to stach deferredPrompt event */
export let deferredPrompt;

/**
 * Network change detection for offline mode
 * @param {Event} e
 */
export function handleNetworkChange(e) {
  const mode = 'is-offline';

  const notificationElement = document.getElementById('offline-offcanvas-item');
  const notificationElementVisible = 'is-visible';

  if (navigator.onLine) {
    document.body.classList.remove(mode);
    notificationElement.classList.remove(notificationElementVisible);
  } else {
    document.body.classList.add(mode);
    notificationElement.classList.add(notificationElementVisible);
  }
}

/**
 * Show custom install promotion before install prompt
 * @param {Event} e
 */
export function customInstallPrompt(e) {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();

  // User is on our site for at least two seconds
  setTimeout(function () {
    // Check whether user is still online
    if (navigator.onLine) {
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      handleInstallPrompt(true);
    }
  }, 6000);

  clearTimeout();
}

/**
 * Install PWA prompt
 */
export function installPwa() {
  // Hide the app provided install promotion
  handleInstallPrompt(false);

  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    });
  }
}

/**
 * Hide install promotion
 */
export function installPwaDismiss() {
  // Hide the app provided install promotion
  handleInstallPrompt(false);
}

/**
 * Toggle install promotion visibility
 * @param {boolean} show
 */
export function handleInstallPrompt(show) {
  const mode = 'has-install-pwa-prompt';

  const promptElement = document.getElementById('pwa-install-offcanvas-item');
  const promptElementVisible = 'is-visible';

  if (show) {
    document.body.classList.add(mode);
    promptElement.classList.add(promptElementVisible);
  } else {
    document.body.classList.remove(mode);
    promptElement.classList.remove(promptElementVisible);
  }
}
