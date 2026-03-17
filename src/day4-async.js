const { cameraLists, hueWards } = require("./fake-data.js");
const getAlerts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        { id: 1, type: "Chay", ward: 20056, status: "new" },
        { id: 2, type: "Trat tu", ward: 20056, status: "pending" },
        { id: 3, type: "Chay", ward: 20057, status: "new" },
        { id: 4, type: "Do thi", ward: 20057, status: "pending" },
      ]);
      rej("Co loi xay ra");
    }, 1000);
  });
};
const main = async () => {
  try {
    const data = await getAlerts();
    console.log(data);
  } catch (error) {
    console.error("Co loi:", error.message);
  }
};

main();

const getCameraList = () => {
  return new Promise((res) => {
    res(cameraLists);
  });
};
getCameraList().then((data) => console.log(data));
