export const carousel = (root: HTMLElement) => {
  /** figureを取り出す */
  const figure = root.querySelector('figure');
  /** figureがnullなら終了する */
  if (figure === null) return;

  /** nav(button)を取り出す */
  const nav = root.querySelector('nav');
  /** figureの子要素(imageを取得)  */
  const images = figure.children;
  /** figureの子要素のimageの個数を取得 */
  const n: number = images.length;
  /** data-gapを取り出す(読み取り書き込みで) */
  const gap = root.dataset.gap;
  /** data-gapにdata-bfcがsetされているか? true */
  const bfc = 'bfc' in root.dataset;
  /**  */
  const theta = (2 * Math.PI) / n;
  /** imageのindex */
  const currentImage = 0;
  /** window.getComputedStyle() メソッドは、要素に適用されたスタイルの値を基本的な値に計算しなおした後、
   * すべてのCSSプロパティの値を返します。 */

  window.addEventListener('resize', () => {
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });

  /**
   * @desc carouselをsetupする
   * @param {number} s
   */
  const setupCarousel = (n: number, s: number) => {
    const apothem = s / (2 * Math.tan(Math.PI / n));

    figure.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < n; i++) {
      (images[i] as HTMLElement).style.padding = `${gap}px`;
    }

    for (let i = 1; i < n; i++) {
      (
        images[i] as HTMLElement
      ).style.transformOrigin = `50% 50% ${-apothem}px`;
      (images[i] as HTMLElement).style.transform = `rotateY(${i * theta}rad)`;
    }

    if (bfc)
      for (let i = 0; i < n; i++)
        (images[i] as HTMLElement).style.backfaceVisibility = 'hidden';

    rotateCarousel(currentImage);
  };

  /**
   * @desc carouselを回す
   * @param imageIndex
   */
  const rotateCarousel = (imageIndex: number): void => {
    if (figure === null) return;
    figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  };

  const setupNavigation = (nav: any, imgIndex: number) => {
    const onClick = (e: any) => {
      e.stopPropagation();

      const t = e.target;
      if (t.tagName.toUpperCase() !== 'BUTTON') return;

      if (t.classList.contains('next')) {
        imgIndex++;
      } else {
        imgIndex--;
      }

      rotateCarousel(imgIndex);
    };

    nav.addEventListener('click', onClick, true);
  };
  setupNavigation(nav, currentImage);
  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
};
