const observer = new PerformanceObserver(list => {
  list.getEntries().forEach(entry => {
    if (entry.type === 'back_forward') {
      console.log(1);
      location.reload();
    }
  });
});

observer.observe({ type: 'navigation' });
