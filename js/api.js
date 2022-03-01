const searchPhone =()=>{
    const searchFlied=document.getElementById('search-field');
    const searchText=searchFlied.value
    searchFlied.value='';
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
    .then(response=>response.json())
    .then(datas=>searchResult(datas.data))
}
const searchResult=Phones=>{
  const searchResult=document.getElementById('search-result');
  searchResult.textContent='';
  Phones.forEach(Phone => {
      console.log(Phone)
      console.log(Phone.brand)
      const div=document.createElement('div')
      div.classList.add('col');
      div.classList.add('mb-3');
      div.innerHTML=`
      <div class="card h-100 border border-primary border-4 rounded-3">
      <img src="${Phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title">Phone:${Phone.phone_name}</h3>
        <h5 class="card-title">Brand:${Phone.brand}</h5>
       </div>
       <button class="btn btn-primary">Deatils</button>
      </div>
      `
      searchResult.appendChild(div)
  });
}