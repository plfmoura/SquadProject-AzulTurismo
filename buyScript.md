header = auth-token

body = {
    id_user: id
    id_product: id
    data_compra: date now
    data_tour: Date
    tickets: quantity
}

401 = sem token / unauthorized
400 = token errado / invalid token

import axios from "axios";

const options = {
  method: 'POST',
  url: 'http://127.0.0.1:3000/comprar',
  headers: {
    'Content-Type': 'application/json',
    'auth-token': (local-storage)
  },
  data: {
    id_user: 4,
    id_product: 15,
    data_compra: '07-03-2023',
    data_tour: '20-03-2023',
    tickets: 5
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

