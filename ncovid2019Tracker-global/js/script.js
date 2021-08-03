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




/* Countries list */
const op = document.querySelector("#op");
async function getData() {
  op.innerHTML = "";
  const response = await fetch(API_URL);
  const json = await response.json();
  json.Countries.forEach((countryDetail) => {
    op.innerHTML += `
				 <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-center">${countryDetail.Country}</h5>
              <p class="card-text"><ul class="list-group">
                      <li class="list-group-item">
                        Country Code: ${countryDetail.CountryCode}
                      </li>
                      <li class="list-group-item list-group-item-warning">
                        New Confirmed: ${countryDetail.NewConfirmed}
                      </li>
                      <li class="list-group-item list-group-item-success">
                        New Recovered: ${countryDetail.NewRecovered}
                      </li>
                      <li class="list-group-item list-group-item-danger">
                        New Deaths: ${countryDetail.NewDeaths}
                      </li>
                      <li class="list-group-item">
                        Total Confirmed: <span class="badge badge-pill badge-warning"> ${countryDetail.TotalConfirmed}</span>
                      </li>
                      <li class="list-group-item">
                        Total Deaths: <span class="badge badge-pill badge-danger">${countryDetail.TotalDeaths}</span>
                      </li>
                      <li class="list-group-item">
                        Total Recovered: <span class="badge badge-pill badge-success"> ${countryDetail.TotalRecovered} </span>
                      </li>
                    </ul></p>
                    <div class="card-footer  text-center">
                  <small class="text-muted">Date :  ${countryDetail.Date} </small>
              </div>
            </div>
          </div>
        </div>
      </div>
				`;
  });
}
getData();


