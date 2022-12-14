export default function createCoverUrl(coverImgUrl, id, width, height, mode) {
  let coverImgUrlArray = coverImgUrl.split("/");
  coverImgUrlArray.shift();
  coverImgUrlArray.shift();
  coverImgUrlArray.shift();
  coverImgUrlArray.splice(3, 1);
  coverImgUrlArray.unshift(`https://akamaividz2.zee5.com/image/upload/w_${width},h_${height},c_scale,f_webp,q_auto:eco`);
  if (mode == "portrait") {
    coverImgUrlArray[3] = "portrait";
  } else if (mode == "list") {
    coverImgUrlArray[3] = "list";
  }
  let coverImage = coverImgUrlArray.join("/");

  return coverImage;
}

export function createListUrl(listCode, id, width, height, mode) {
  let listImage = `https://akamaividz2.zee5.com/image/upload/w_1082,h_609,c_scale,f_webp,q_auto:eco/resources/${id}/list/${listCode}.jpg`;
  // let coverImgUrlArray = coverImgUrl.split("/");
  // coverImgUrlArray.shift();
  // coverImgUrlArray.shift();
  // coverImgUrlArray.shift();
  // coverImgUrlArray.splice(3, 1);
  // coverImgUrlArray.unshift(`https://akamaividz2.zee5.com/image/upload/w_${width},h_${height},c_scale,f_webp,q_auto:eco`);
  // if (mode == "portrait") {
  //   coverImgUrlArray[3] = "portrait";
  // }
  // let coverImage = coverImgUrlArray.join("/");

  return listImage;
}
