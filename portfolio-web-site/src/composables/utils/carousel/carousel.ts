export const carousel = (root: any) => {
  /** figureを取り出す */
  const figure = root.querySelector('figure');
  /** nav(button)を取り出す */
  const nav = root.querySelector('nav');
  /** figureの子要素(imageを取得)  */
  const images = figure?.children;
  /** figureの子要素のimageの個数を取得 */
  const n: number = images?.length ?? 0;
  /** data-gapを取り出す(読み取り書き込みで) */
  const gap = root.dataset.gap || 0;
  /** data-gapにdata-bfcがsetされているか? true */
  const bfc = 'bfc' in root.dataset;
  /**  */
  const theta = (2 * Math.PI) / n;
  /** imageのindex */
  const currentImage = 0;

  window.addEventListener('resize', () => {
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });

  const setupCarousel = (n: number, s: number) => {
    const apothem = s / (2 * Math.tan(Math.PI / n));
    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < n; i++) {
      images[i].style.padding = `${gap}px`;
    }

    for (let i = 1; i < n; i++) {
      images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      images[i].style.transform = `rotateY(${i * theta}rad)`;
    }

    if (bfc)
      for (let i = 0; i < n; i++) images[i].style.backfaceVisibility = 'hidden';

    rotateCarousel(currentImage);
  };

  /**
   * @desc carouselを回す
   * @param imageIndex
   */
  const rotateCarousel = (imageIndex: number) => {
    figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  };

  const setupNavigation = (nav: any, imgIndex: number) => {
    nav.addEventListener('click', onClick, true);

    function onClick(e: any) {
      e.stopPropagation();

      const t = e.target;
      if (t.tagName.toUpperCase() !== 'BUTTON') return;

      if (t.classList.contains('next')) {
        imgIndex++;
      } else {
        imgIndex--;
      }

      rotateCarousel(imgIndex);
    }
  };
  setupNavigation(nav, currentImage);
  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
};
