const observer = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => {
    if (entry.type === 'back_forward') {
      console.log(1);
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  });
});

observer.observe({ type: 'navigation' });
