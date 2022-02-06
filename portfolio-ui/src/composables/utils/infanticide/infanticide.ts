/**
 * @see https://www.webprofessional.jp/throttle-scroll-events/
 * @param fn
 * @param wait
 * @desc この実装では変数timeを設定し、関数が最初に呼び出された時点をトラッキングしています。
 *       返される関数が呼ばれるたびにwaitの時間間隔が経過したかどうかをチェックし、
 *       経過していた場合コールバックを発生させてtimeをリセットします。
 *       こちらでは規定時間後に実行するという考え方です。
 */
const throttle = (fn: (e: MouseEvent) => void, delay: number = 16) => {
  let time = Date.now();
  return (event: MouseEvent) => {
    if (time + delay < Date.now()) {
      time = Date.now();
      fn(event);
    }
  };
};

/**
 * @desc setTimeoutでdelay秒処理を待ち関数を実行
 *       debounce関数がdelay秒内で複数呼び出されても、都度clearTimerを実行し最後の1回だけを実行する。
 */
const debounce = (fn: Function, delay: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

export { throttle, debounce };
