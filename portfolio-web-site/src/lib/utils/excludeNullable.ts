/**
 * @desc 要素(リテラル・オブジェクト・配列)からnullとundefinedを抜くユーティリティ
 */

/**
 * @desc 配列からnullを取り除く
 */
const excludeNullOfArray = <T>(array: Array<T | null>): Array<T> => {
  return array.filter((t): t is Exclude<typeof t, null> => t !== null);
};

const excludeUndefinedOfArray = <T>(array: Array<T | undefined>): Array<T> => {
  return array.filter(
    (t): t is Exclude<typeof t, undefined> => t !== undefined
  );
};

export { excludeNullOfArray, excludeUndefinedOfArray };
