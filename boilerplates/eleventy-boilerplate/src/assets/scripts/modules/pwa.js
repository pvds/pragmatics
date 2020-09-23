/* custom PWA installation triggers */
export const pwaInstallCta = document.getElementById('install-promotion-cta');
export const pwaInstallDismiss = document.getElementById('install-promotion-dismiss');

/* used to stach deferredPrompt event */
export let deferredPrompt;

/**
 * Network change detection for offline mode
 * @param {Event} e
 */
export function handleNetworkChange(e) {
  if (navigator.onLine) {
    document.body.classList.remove('offline-mode');
  } else {
    document.body.classList.add('offline-mode');
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
      handleInstallPromotion(true);
    }
  }, 10000);

  clearTimeout();
}

/**
 * Install PWA prompt
 */
export function installPwa() {
  // Hide the app provided install promotion
  handleInstallPromotion(false);

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
  handleInstallPromotion(false);
}

/**
 * Toggle install promotion visibility
 * @param {boolean} show
 */
export function handleInstallPromotion(show) {
  if (show) {
    document.body.classList.add('show-install-promotion');
  } else {
    document.body.classList.remove('show-install-promotion');
  }
}
