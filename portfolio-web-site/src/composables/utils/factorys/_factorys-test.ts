/** 渡されたものの配列を作成する。 */
export const arrayFactorys = <T extends Object>(
  entity: T,
  count: number
): Array<T> => {
  const entitys = [];
  for (let i = 0; i <= count; i++) {
    entitys.push(entity);
  }
  return entitys;
};
