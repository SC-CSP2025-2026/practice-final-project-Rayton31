const loadRosterByTeam = async (teamId) => {
  const url =
  `https://student-api-proxy.onrender.com/api/basketball-head.p.rapidapi.com/teams/${teamId}/roster/2016-2017`;
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "5475b95f4e30f1cb1c124d8b76a13dae802265646f592a5d85d5fb69a5708124",
  },
};

const response = await fetch (url, options);
const result = await response.json();
const data = result.data; // Your API response

console.log(data);

}
  
  
  const gswButton = document.querySelector("#GSW-btn");
  const houButton = document.querySelector("#HOU-btn");
  const lalButton = document.querySelector("#LAL-btn");

  console.log(lalButton);
  console.log(gswButton);
  console.log(houButton);


const listGroup = document.querySelector(".list-group");

loadRosterByTeam("general");


// fetch(url, options)
//   .then((response) =>
//     response.json().then((result) => {
//       console.log(result.data); // Your API data
//       console.log(`Cost: $${result.meta.cost}`);
//       console.log(`Remaining: $${result.meta.remaining_budget}`);
//     }),
//   )
//   .catch((error) => {
//     console.log(error);
//   });

