
import axios from "axios";

let id_list = ["1", "2", "3"];

let promise_list = [];

for (let id of id_list) {
  promise_list.push(
    axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
  );
}

let p_func_dic = {};

promise_list.forEach((p_item, index) => {
  p_func_dic[index] = function () {
    return p_item;
  };
});

let result = [];

p_func_dic[2]()
  .then((res) => {
    result.push(res.data);

    return p_func_dic[1]();
  })
  .then((res) => {
    result.push(res.data);

    return p_func_dic[0]();
  })
  .then((res) => {
    result.push(res.data);

    console.log(result);
  });
