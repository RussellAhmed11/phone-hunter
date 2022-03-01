document.getElementById('error-message').style.display = 'none';
const searchPhone =()=>{
    const searchFlied=document.getElementById('search-field');
    const searchText=searchFlied.value
    searchFlied.value='';
    if(searchText == ''){
       alert('please Enter Phone Name')
    }
    else{
        
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(response=>response.json())
    .then(datas=>searchResult(datas.data))
    .catch(error => displayError(error));
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}
const searchResult=Phones=>{
  const searchResult=document.getElementById('search-result');
  searchResult.textContent='';
  Phones.forEach(Phone => {
      const div=document.createElement('div')
      div.classList.add('col');
      div.classList.add('mb-3');
      div.innerHTML=`
      <div class="card h-100 border border-primary border-5 rounded-3">
        <img src="${Phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">Phone:${Phone.phone_name}</h3>
            <h5 class="card-title">Brand:${Phone.brand}</h5>
        </div>
        <button onclick="phoneDetails('${Phone.slug}')" class="btn btn-primary">Deatils</button>
      </div>
      `
      searchResult.appendChild(div)
  });
}
const phoneDetails=(PhoneId)=>{
  const url=`https://openapi.programming-hero.com/api/phone/${PhoneId}`
  fetch(url)
  .then(response=>response.json())
  .then(data=>displayPhoneDeatils(data))
}
const displayPhoneDeatils=deatils=>{
    const phoneDetails=document.getElementById('phone-details')
    phoneDetails.textContent=''
    const div=document.createElement('div')
    div.classList.add('card');
    div.classList.add('mb-3');
    div.innerHTML = `
    <div class="card h-100 border border-primary border-5 rounded-3">
     <img src="${deatils.data.image}" class="card-img-top" alt="...">
     <div class="card-body">
        <h5 class="card-title">Name:${deatils.data.name}}</h5>
        <p class="card-text">Release Date:${deatils.data.releaseDate}</p> 
        <p class="card-text">Chipset:${deatils.data.mainFeatures.chipSet}</p>      
        <p class="card-text">Display Size:${deatils.data.mainFeatures.displaySize}</p>
        <p class="card-text">Memory:${deatils.data.mainFeatures.memory}</p>
        <p class="card-text">WLAN:${deatils.data.others.WLAN}</p>
        <p class="card-text">Bluetooth:${deatils.data.others.Bluetooth}</p>
        <p class="card-text">GPS:${deatils.data.others.GPS}</p>
        <p class="card-text">NFC:${deatils.data.others.NFC}</p>
        <p class="card-text">Radio:${deatils.data.others.Radio}</p>
      </div>
    </div>
    `;
    phoneDetails.appendChild(div);
}