/**
 * @desc ユーザ定義タイプガード群
 * @memo このオブジェクトはnullやundefinedではないかなど、if文に使用したりする。
 * @see https://book.yyts.org/reference/statements/any-vs-unknown  any vs unknown
 *
 */

const isString = (arg: unknown): arg is string => typeof arg === 'string';

const isNumber = (arg: unknown): arg is number => typeof arg === 'number';

const isObject = (x: unknown): x is object =>
  x !== null && (typeof x === 'object' || typeof x === 'function');

/**
 * @desc HTMLElementからnullを取り除く
 * @param {(HTMLElement | null)} arg
 * @return {HTMLElement}
 */
const isHTMLElement = (
  arg: HTMLElement | null
): arg is Exclude<typeof arg, null> => arg !== null;

const isHTMLCollection = (
  arg: Element | undefined
): arg is Exclude<typeof arg, undefined> => arg !== undefined;

export { isString, isNumber, isObject, isHTMLElement, isHTMLCollection };
