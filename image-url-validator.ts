// Input
//{'url':'https://image.shutterstock.com/z/stock-photo-ladybug-sunlight-on-the-field-133639646.jpg'}

const isImageURL = require("image-url-validator").default; // require

let url =
  "https://image.shutterstock.com/z/stock-photo-ladybug-sunlight-on-the-field-133639646.jpg";

type UrlStatus = {
  urlstatus: boolean;
};

let result: UrlStatus = {
  urlstatus: false,
};

isImageURL(url).then((isImage: boolean) => (result.urlstatus = isImage));

let output = { urlstatus: result };

// Output
// {'urlstatus': boolean}
// in the shown case the output would be true because the url is an image
// {'urlstatus':true}
