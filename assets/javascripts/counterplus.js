document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-counter');
  
    counters.forEach(counter => {
      const value = counter.textContent;
      counter.textContent = '+' + value;
    });
  });