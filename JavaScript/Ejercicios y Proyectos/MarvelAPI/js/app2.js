let appDiv = document.querySelector("#appDiv");
let ts = Date.now();
let pubkey = "d1f9e74168f68cb79835a29bb33f672f";
let pvtkey = "a28679ee3ce5a14c37ea193aa48b2baa6419d424";
let hash = CryptoJS.MD5(ts + pvtkey + pubkey).toString();
let url = `http://gateway.marvel.com/v1/public/events?ts=${ts}&apikey=${pubkey}&hash=${hash}`;
console.log(url);

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    json.data.results.map(item => {
      let url = item.thumbnail.path + "." + item.thumbnail.extension;
      appDiv.innerHTML += `<div class="item">
            <img src="${url.replace("http", "https")}"/>
            <span>${item.title}</span>
            </div>`;
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

fetchData();