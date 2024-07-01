export default function registerServiceWorker() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    } else {
      console.warn('Service Worker is not supported by this browser.');
    }
  }
  