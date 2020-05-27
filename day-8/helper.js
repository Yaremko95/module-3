
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
    let nameInput= document.querySelector("#name")
    let descInput= document.querySelector('#description')
    let brandInput =document.querySelector('#brand')
    let imageInput = document.querySelector('#imageUrl')
    let priceInput = document.querySelector('#price')

        let object = {
            name: document.querySelector("#name").value,
            description: document.querySelector('#description').value,
            brand: document.querySelector('#brand').value,
            imageUrl: document.querySelector('#imageUrl').value,
            price: document.querySelector('#price').value,
        }

        let response = await saveEvent(object)
       
        
        if(response.ok) {
            location.assign("marketing.html");
        }else {
            let error = await response.json()
           if (Object.keys(error.error.errors).includes('name')) {
               nameInput.classList.add('is-invalid')
           } 
           if (Object.keys(error.error.errors).includes('description')) {
            descInput.classList.add('is-invalid')
            }
            if (Object.keys(error.error.errors).includes('brand')) {
                brandInput.classList.add('is-invalid')
            }
            if (Object.keys(error.error.errors).includes('imageUrl')) {
                imageInput.classList.add('is-invalid')
            }
            if (Object.keys(error.error.errors).includes('price')) {
                priceInput.classList.add('is-invalid')
            }
        }
 }