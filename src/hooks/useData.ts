export const cuento = await fetch(
  "https://la-charca-del-silencio.vercel.app/"
).then((response) => response.json());

export const response = await fetch(
  "https://la-charca-del-silencio.vercel.app/response"
)
  .then((data) => data.json())
  .then((parsedData) => {
    return parsedData.responses[parsedData.responses.length - 1].text;
  });
