/**
 * @desc 横スクロール
 * @param {e: any} 型定義をしたい
 */

export const onHorizontalScroll = (e: any) => {
  e.preventDefault();
  const x = document.getElementById('root');
  if (e.wheelDelta > 0 && x !== null) {
    x.scrollLeft += -e.wheelDelta;
  } else if (e.wheelDelta < 0 && x !== null) {
    x.scrollLeft += -e.wheelDelta;
  }
};

/**
 * @desc 横スクロール(スマホのタッチ)
 * @param {e: any} 型定義をしたい
 */
export const onTouchMove = (e: any) => {
  e.preventDefault();
  const x = document.getElementById('root');
  if (e.wheelDelta > 0 && x !== null) {
    x.scrollLeft += -e.wheelDelta;
  } else if (e.wheelDelta < 0 && x !== null) {
    console.log(`マイナスをプラスに変更:${-e.wheelDelta}`);
    x.scrollLeft += -e.wheelDelta;
  }
};
