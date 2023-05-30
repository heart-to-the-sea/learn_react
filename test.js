a_obj = {
  c: "123",
  asin: "aaa",
  img_link: null,
};
b_obj = {
  asin: null,
  nods: "123123",
  img_link: "img_link",
};
/**
 * 传入两个对象，将其中有效值合并为一个新对象
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns
 */
function mergeNotNullObjContent(obj1, obj2) {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);
  const obj = {};
  const objList = Array.from(new Set([...obj1keys, ...obj2keys])).sort(
    (a, b) => a.charCodeAt(0) - b.charCodeAt(0)
  );

  for (let key of objList) {
    let val = obj1[key] || obj2[key];
    if (val) {
      obj[key] = val;
    }
  }
  return obj;
}
console.log(mergeNotNullObjContent(a_obj, b_obj));

console.log("promise more return vcalue");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("one");
    resolve(1);
  }, 1000);
});
promise.then((res) => {
  console.log(res);
  return 2;
});
promise.then((res) => {
  console.log(res, 2);
});

// Promise.resolve()
//   .then(() => {
//     return new Error("error!!!");
//   })
//   .then((res) => {
//     console.log("then: ", res);
//   })
//   .catch((err) => {
//     console.log("catch: ", err);
//   });
function tp(data) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("数据传输data", data);
      data % 2 === 0 ? rej(data) : res(data);
    });
  });
}
Promise.all([tp(1), tp(2), tp(3), tp(4)]).then(
  (...args) => {
    console.log("res", args);
  },
  (...args) => {
    console.log("rej", args);
  }
);