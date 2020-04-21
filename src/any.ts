import axios from 'axios';
export {};

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/events?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    body: string;
  }
  let data: Article[];
  data = response.data;
  console.log(response.data);
});
