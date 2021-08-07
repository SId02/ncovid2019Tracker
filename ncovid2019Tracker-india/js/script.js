const API_URL = "https://api.covid19india.org/data.json";
async function covidData() {   
   const response = await fetch(API_URL);
   const data = await response.json();
   const datajson = data.statewise[0];
    let countryDashboard = `
    <div class="pb-5 m-auto row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                      <div class="card cardborderone ">
                        <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Confirmed </h5>
                          <p class="card-text ">${datajson.confirmed}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card cardbordertwo">
                        <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Active </h5>
                          <p class="card-text">${datajson.active}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card cardborderthree">
                      <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Recovered </h5>
                          <p class="card-text">${datajson.recovered}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card cardborderfour">
                        <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Deaths</h5>
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


const stateDashboard = document.querySelector("#stateDashboard");
async function getData() {
  stateDashboard.innerHTML = "";
  const response = await fetch(`https://api.covid19india.org/data.json`);
  const json = await response.json();
  json.statewise.forEach((stateDetail) => {
    stateDashboard.innerHTML += `
    <div class="col-lg-4 col-md-3 g-3">
      <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-center fw-bold">${stateDetail.state}</h5>
              <p class="card-text">
              <ul class="list-group">
                      <li class="list-group-item">
                        Country Code : ${stateDetail.statecode}
                      </li>
                       <li class="list-group-item">
                        <span class="badge bg-secondary"> Active : </span> <span class=" text-dark"> ${stateDetail.active}</span>
                      </li>
                      <li class="list-group-item">
                        <span class="badge bg-warning"> Confirmed : </span> <span class=" text-dark" > ${stateDetail.confirmed}</span>
                      </li>
                      <li class="list-group-item">
                       <span class="badge bg-danger"> Deaths : </span> <span class="text-dark"> ${stateDetail.deaths}</span>
                      </li>
                      <li class="list-group-item">
                        <span class="badge bg-success"> Recovered : </span> <span class=" text-dark"> ${stateDetail.recovered} </span>
                      </li>
                    </ul>
					        </p>
                  <div class="card-footer  text-center">
                  <small class="text-dark fw-normal">Date :  ${stateDetail.lastupdatedtime} </small>
              </div>
            </div>
          </div>
    </div>

				`;
  });
}
getData();







































































