const viewPortTracker = (() => {
  const resultSet = new Set();

  const isInViewport = (element) => {
    const el = element.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewWidth = window.innerWidth || document.documentElement.clientWidth;

    return el.top >= 0 && el.left >= 0 && el.right <= viewWidth && el.bottom <= viewHeight;
  };

  const detect = () => {
    const blocks = document.querySelectorAll('.item');
    blocks.forEach((block) => {
      if (isInViewport(block)) {
        resultSet.add(block.textContent);
      }
    });
    console.log(Array.from(resultSet));
  };

  return {
    detect
  };
})();

window.addEventListener('scroll', viewPortTracker.detect);
