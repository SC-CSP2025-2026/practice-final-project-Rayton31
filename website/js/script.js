const gswButton = document.querySelector("#GSW-btn");
const houButton = document.querySelector("#HOU-btn");
const lalButton = document.querySelector("#LAL-btn");
const searchInput = document.querySelector("#search-box");
const rostersList = document.querySelector(".list-group");

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

const response = await fetch(url, options);
const result = await response.json();
const data = result.data; // getSampleSearchRosterCeltics();
const player = data.body.roster;

rostersList.innerHTML = "";

player.forEach((roster) => {
  const listItem = `
            <li class="list-group-item">
            <div class="roster-name">${roster.name}</div>
              <div class="roster-position">
                ${roster.position}
              </div>
            </li>`;
  rostersList.insertAdjacentHTML("beforeend", listItem);
  // console.log(roster.name);
  // console.log(roster.position);
});
};


gswButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadRosterByTeam("GSW");
});

lalButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadRosterByTeam("LAL");
});

houButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadRosterByTeam("HOU");
});

searchInput.addEventListener("keyup", (event) => {
  if(event.key === "Enter") {
    event.preventDefault();
    const searchTeam = searchInput.value.trim();
    loadRosterByTeam(searchTeam);
  }
});

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

