export const patchRate = async ({ id, rate }) => {
  const res = await fetch(`api/images/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({ rate })
  });
  const body = await res;
  if (res.status !== 200) throw Error(body.message);

  return body;
};
