// // Environment detection and setup
// const isNode = typeof window === 'undefined';
// let localStorage;

// if (isNode) {
//     // Node.js environment - create mock localStorage
//     localStorage = (() => {
//         let store = {};
//         return {
//             getItem(key) { return store[key] || null; },
//             setItem(key, value) { store[key] = value.toString(); },
//             removeItem(key) { delete store[key]; },
//             clear() { store = {}; }
//         };
//     })();
// } else {
//     // Browser environment - use native localStorage
//     localStorage = window.localStorage;
// }

// const localStorageWithExpiry = {
//     set(key, value, expiry) {
//         const updatedObj = {
//             value: value,
//             expiry: Date.now() + expiry
//         }
//         console.log("updated obj", updatedObj)
//         localStorage.setItem(key, JSON.stringify(updatedObj))
//     },
//     get(key) {
//         let storedItem = localStorage.getItem(key);
//         if (!storedItem) {
//             return null;
//         }
//         try {
//             storedItem = JSON.parse(storedItem);
//             if (storedItem.expiry && Date.now() > storedItem.expiry) {
//                 console.log("Item expired, removing")
//                 localStorage.removeItem(key);
//                 return null;
//             }
//             console.log("Fetched from storage")
//             return storedItem.value;
//         } catch (err) {
//             console.log("Error parsing stored item:", err);
//             return null;
//         }
//     },
//     remove(key) {
//         localStorage.removeItem(key)
//     },
//     clear() {
//         localStorage.clear();
//     }
// };

// // Test
// localStorageWithExpiry.set("user", { name: "Simrandeep Kaur" }, 1500);
// console.log(localStorageWithExpiry.get("user"));

// setTimeout(() => {
//     console.log(localStorageWithExpiry.get("user"));
// }, 1000);

// setTimeout(() => {
//     console.log(localStorageWithExpiry.get("user"));
// }, 2000);


let isNode=typeof window===undefined;
let localStorage;
if(isNode){
     localStorage=()=>{
        let store={};
        return {
           setItem(key,data){
              return store[key]=data.toString();
           },
           getItem(key,data){
              return store[key];
           },
           removeItem(key){
              delete store[key];
           },
           clear(){
              store={}
           }
        }
    }
}else{
   localStorage=window.localStorage;
}