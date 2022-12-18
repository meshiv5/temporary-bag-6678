const axios = require("axios");
let count = 0
const fs = require("fs");
let objA = {}
let objB = {}
let objC = {}
let arr = []
for(let i=1;i<12;i++){
  axios
    .get(
      `https://gwapi.zee5.com/content/collection/0-8-homepage?page=${i}&limit=5&item_limit=20&country=IN&translation=en&languages=en,hi&version=10`,
      {
        headers: {
          "x-access-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJXZWJAJCF0Mzg3MTIiLCJpc3N1ZWRBdCI6IjIwMjItMTItMTNUMDc6NTY6MTUuODQ0WiIsInR0bCI6ODY0MDAwMDAsImlhdCI6MTY3MDkxODE3NX0.TTipy5H3Giur8XlJjF4YhrfXhJPMvSh87fAO9F1-9sg",
        },
      }
    )
    .then((res) => {
      console.log(res.data.buckets[0].items[0]);
      let x = res.data.buckets
      for(let j=0;j<x.length;j++){
        let y = x[j].items
        for(let k=0;k<y.length;k++){
          let h = [y[k].title.toLowerCase()];
          for(let s=0;s<y[k].tags.length;s++){
            h.push(y[k].tags[s].toLowerCase());
          }
          let e = []
          let r = y[k].genre
          if(r){
            for (let q = 0; q < r.length; q++) {
              e.push(r[q].id.toLowerCase());
            }
          }
          let g = {
            id: y[k].id,
            title: y[k].title,
            tags: h,
            languages: y[k].subtitle_languages,
            category: e,
            type: y[k].asset_subtype,
            list: y[k].image_url.list,
            cover: y[k].image_url.cover,
          };
          arr.push(g)
        }
      //   count+=y
      }
      // console.log(count)
      return arr
    }).then((res)=>{
      fs.writeFile("./ans.json", JSON.stringify(res), (err) => {
        if (err) throw err;
      });
    })
}


  // temp = temp.split("/");
  // console.log(temp)
  // temp.shift();
  // temp.shift();
  // temp.shift();
  // console.log(temp)
  // temp.splice(3, 1);
  // console.log(temp)
  // temp.unshift(
  //   `https://akamaividz2.zee5.com/image/upload/w_500,h_500,c_scale,f_webp,q_auto:eco`
  // );
  // // if (mode == "portrait") {
  //   temp[3] = "portrait";
  // // } else if (mode == "list") {
  // //   temp[3] = "list";
  // // }
  // let coverImage = temp.join("/");

  // console.log(coverImage);
// });

