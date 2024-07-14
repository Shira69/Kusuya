document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Simulate an async operation like fetching data or loading images
    function simulateAsyncOperation() {
      return new Promise(resolve => {
        console.log('Starting async operation');
        setTimeout(() => {
          console.log('Async operation completed');
          resolve();
        }, 2000); // Simulate a delay of 2 seconds
      });
    }
  
    async function loadContent() {
      try {
        await simulateAsyncOperation(); // Wait for the simulated async operation to complete
        console.log('Hiding preloader and showing content');
  
        // Hide the preloader and show the main content
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
  
        // Restore the overflow
        document.body.style.overflow = 'auto';
      } catch (error) {
        console.error('Error during async operation:', error);
      }
    }
  
    loadContent();
  });
  