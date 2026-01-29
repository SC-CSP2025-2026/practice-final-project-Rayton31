const url =
  "https://student-api-proxy.onrender.com/api/basketball-head.p.rapidapi.com/players/jordami01/stats/PerGame?seasonType=Regular";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "5475b95f4e30f1cb1c124d8b76a13dae802265646f592a5d85d5fb69a5708124",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
