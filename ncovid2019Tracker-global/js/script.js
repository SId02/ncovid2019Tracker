const API_URL = `https://api.covid19api.com/summary`;

async function getCovidapi() {
  const jsondata = await fetch(API_URL);
  const jsdata = await jsondata.json();
  var globaldata = jsdata.Global;
    let globalDashboard = `
                    <div class="pb-5 m-auto row row-cols-1 row-cols-md-3 g-3">
                    <div class="col">
                      <div class="card cardborderone ">
                        <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Confirmed </h5>
                          <p class="card-text">${globaldata.TotalConfirmed}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card cardborderthree">
                      <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Recovered </h5>
                          <p class="card-text">${globaldata.TotalRecovered}</p>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card cardborderfour">
                        <div class="text-center card-body">
                          <h5 class="card-title text-uppercase">Deaths</h5>
                          <p class="card-text">${globaldata.TotalDeaths}</p>
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
				<div class="col-lg-4 col-md-3 g-3">
      <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-center">${countryDetail.Country}</h5>
              <p class="card-text">
					<ul class="list-group">
						  <li class="list-group-item">
							Country Code: ${countryDetail.CountryCode}
						  </li>
						  <li class="list-group-item">
							 <span class="badge bg-warning"> Confirmed :</span> <span class=" text-dark" > ${countryDetail.TotalConfirmed}</span>
						  </li>
						  <li class="list-group-item">
							 <span class="badge bg-danger"> Deaths : </span> <span class=" text-dark">${countryDetail.TotalDeaths}</span>
						  </li>
						  <li class="list-group-item">
							 <span class="badge bg-success"> Recovered : </span> <span class=" text-dark"> ${countryDetail.TotalRecovered} </span>
						  </li>
                    </ul>
				</p>
                  <div class="card-footer  text-center">
					<small class="text-dark">Date :  ${countryDetail.Date} </small>
				  </div>
            </div>
          </div>
    </div>
				`;
  });
}
getData();
























