const sendData = function (data) {
  const xhttpPost = new XMLHttpRequest();

  xhttpPost.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhttpPost.send(data);
  xhttpPost.onload = function () {
    alert("Данные успешно отправлены");
  };
  xhttpPost.onerror = function () {
    alert("ERROR");
  };
};

const getdata = function () {
  const xhttpGet = new XMLHttpRequest();

  xhttpGet.open("GET", "db.json", true);
  xhttpGet.send();
  xhttpGet.onload = function () {
    if (xhttpGet.status === 200) {
      sendData(JSON.stringify(xhttpGet.response));
    } else {
      alert("ERROR");
    }
  };
};

getdata();
