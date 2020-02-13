export const getCards = async () => {
  const res = await fetch('api/images');
  const body = await res.json();
  if (res.status !== 200) throw Error(body.message);

  return body;
};
