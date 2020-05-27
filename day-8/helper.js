
const url = 'https://striveschool.herokuapp.com/api/product/'
const getData= async () => {
    let response = await fetch(url,  {
        "method": "GET",
        "headers": {
            "Authorization": "Basic " + btoa('user27:ZGDWyFCA8umbgpvZ')}
        })
    try {
        if(response.ok) {
          
            let tableBody = document.querySelector('.outcome tbody')
            tableBody.innerHTML=''
             let data = await response.json()
             console.log(data)
             data.forEach(product => {
                 tableBody.innerHTML+=createRow(product)
             });
            
        }
    }catch(error) {

    }
    
   
}

const saveEvent = async (agendaEvent) => {
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(agendaEvent),
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa('user27:ZGDWyFCA8umbgpvZ')
      }),
    });
    return response;
  };


  const createRow =(productInfo)=> {
    let row=`
    <tr>
      <th scope="row">${productInfo._id}</th>
      <td>${productInfo.name}</td>
      <td>${productInfo.description}</td>
      <td>${productInfo.brand}</td>
      <td ><img src="${productInfo.imageUrl}" alt="" class="image-fluid" style="max-height: 10rem;"></td>
      <td>$${productInfo.price}</td>
      <td>${productInfo.userId}</td>
      <td>${productInfo.createdAt}</td>
      <td>${productInfo.updatedAt}</td>

    </tr>
    `
    return row;
  }


  const handleSubmit = async() => {
    event.preventDefault();
    submitEvent();
  }

 const submitEvent = async() => {
        let object = {
            name: document.querySelector("#name").value,
            description: document.querySelector('#description').value,
            brand: document.querySelector('#brand').value,
            imageUrl: document.querySelector('#imageUrl').value,
            price: document.querySelector('#price').value,
        }

        let response = await saveEvent(object)
        console.log(response)
        if(response.ok) {
            alert('ok')
        }else {
            alert('not ok')
        }
 }