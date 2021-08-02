const API_URL = `https://api.covid19api.com/summary`;

async function getCovidapi() {
  const jsondata = await fetch(API_URL);
  const jsdata = await jsondata.json();
  var globaldata = jsdata.Global;
    let globalDashboard = `
  
                    <div class="pb-5 m-auto row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                      <div class="card border-3 border-secondary ">
                        <div class="text-center card-body">
                          <h5 class="card-title">Confirmed </h5>
                          <p class="card-text">${globaldata.confirmed}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card border-3 border-warning">
                        <div class="text-center card-body">
                          <h5 class="card-title">Active </h5>
                          <p class="card-text">${globaldata.active}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card border-3 border-success">
                      <div class="text-center card-body">
                          <h5 class="card-title">Recovered </h5>
                          <p class="card-text">${globaldata.recovered}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card border-3 border-danger">
                        <div class="text-center card-body">
                          <h5 class="card-title">Deaths</h5>
                          <p class="card-text">${globaldata.deaths}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                     <div class="pb-3 m-auto text-center card-footer bg-dark">
                      <small class="text-white ">Last updated : ${globaldata.Date}</small>
                    </div>`;
  document.querySelector("#globalDashboard").innerHTML = globalDashboard;
}
getCovidapi();