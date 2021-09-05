/**
 * @desc 渡された要素のデータ型の配列を作成する。(countで個数指定可能)
 * @return {Array<T>}
 *
 */
export const arrayFactorys = <T extends Object>(
  entity: T,
  count: number
): Array<T> => {
  const entitys = [];
  for (let i = 0; i < count; i++) {
    entitys.push(entity);
  }
  return entitys;
};
