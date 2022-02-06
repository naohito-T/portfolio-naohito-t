export const onClickForm = () => {
  const onClick = (data: string) => {
    console.log(data);
  };

  return {
    onClick,
  };
};

export type onClickFormType = ReturnType<typeof onClickForm>;
