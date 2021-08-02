const API_URL = "https://api.covid19india.org/data.json";
async function covidData() {   
   const response = await fetch(API_URL);
   const data = await response.json();

const datajson = data.statewise[0];
console.log(datajson)
    let countryDashboard = `
    <div class="pb-5 m-auto row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                      <div class="card border-3 border-secondary ">
                        <div class="text-center card-body">
                          <h5 class="card-title">Confirmed </h5>
                          <p class="card-text">${datajson.confirmed}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card border-3 border-warning">
                        <div class="text-center card-body">
                          <h5 class="card-title">Active </h5>
                          <p class="card-text">${datajson.active}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card border-3 border-success">
                      <div class="text-center card-body">
                          <h5 class="card-title">Recovered </h5>
                          <p class="card-text">${datajson.recovered}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card border-3 border-danger">
                        <div class="text-center card-body">
                          <h5 class="card-title">Deaths</h5>
                          <p class="card-text">${datajson.deaths}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                     <div class="pb-3 m-auto text-center card-footer bg-dark">
                      <small class="text-white ">Last updated : ${datajson.lastupdatedtime}</small>
                    </div>`;

document.querySelector("#countryDashboard").innerHTML = countryDashboard;

}
covidData();



