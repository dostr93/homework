// Task1

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let number = Math.floor(Math.random() * 6) + 1;
        console.log(number)
        if (number <= 5) {
            resolve(number);
            
        } else if (number === 6) {
            reject(Errrrroorrrrrr);
        }
    }, 2000)
    
});

console.log(promise)
promise
.then(resolve => {
    if (resolve === 1) {
        console.log("Stay here")
    } else {
        console.log(`Go ${resolve} steps`)
    } 
})
.catch(err => console.error('Exit'))

// Task 2

class PromiseError extends Error {
    constructor(message, name) {
      super(message);
      this.name = name;
    }
  }

function goToShop() {
    let foods = ['apple', 'pineapple', 'cherry','meat', 'chicken']
    console.log(Promise.resolve(foods.length)) 
    return Promise.resolve(foods.length)
}

function makeDinner() {
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Bon appetit')
            console.log('bonapetit')
        }, 3000)
    });
    return promise2
}

goToShop()
.then(res => {
    if (res < 4) {
        Promise.reject('Too low products')
        .catch(err => console.error(new PromiseError(err, 'product error')))
    } else {
        return makeDinner()
    }
})
.catch((err) => console.error(err))

// Task 3

function renderCards(...id) {
    let characters = fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(
    (res) => res.json()
    )
    .then((data) => {
     render(data)
    })
    .catch((err) => console.log(err));
   }
   const render = (data) => {
    let container = document.querySelector('.container');
    container.innerHTML = "";
    data.forEach((item) => {
        let cardHTML = `<div class="card">
           <div class="card-info">
             <div class="title">
               <h1>${item.name}</h1>
               <div class="status">
                <div class="live-status ${
                   item.status === "Dead" ? "dead" : ""
                 }"></div>
                 <p>${item.status} - ${item.species} </p>
               </div>
             </div>
             <div class="content">
               <p>${item.location.name}</p>
             </div>
           </div>
           <div class="card-image">
             <img
               src="${item.image}"
               alt="Img"
             />
           </div>
         </div>`;
        container.insertAdjacentHTML("beforeend", cardHTML);
      });
   } 
   const filter = (type) => fetch('https://rickandmortyapi.com/api/character' + `/${type}`)
       .then((response) => response.json())
       .then((data) => {
           render(data.results)
       });
   let formContainer = document.querySelector('.form-container');
   formContainer.addEventListener('click', (event) => {
       let status = event.target.id
       if (status === 'male' || status === 'female') {
           let gender = '?gender=' + status
           filter(gender)
       }
       if (status === 'alive' || status === 'dead') {
           let isAlive = '?status=' + status
           filter(isAlive)
       }
   })
   renderCards(1, 2, 3, 4, 56, 78, 123, 358, 345, 213, 546, 234, 12, 34, 45, 65, 76, 87, 98, 21, 32, 34, 45, 60)