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

const getTaskList = () => Promise.resolve([{ id: 101 }]);

const getCameraList = () => {
  return new Promise((res) => {
    res(cameraLists);
  });
};

const loadAll = async () => {
  const [camera, task] = await Promise.all([getCameraList(), getTaskList()]);
  console.log("Task length: ", task.length, "Camera length: ", camera.length);
};

const main = async () => {
  try {
    const data = await getAlerts();
    console.log("tat ca canh bao: ", data);
    getCameraList().then((data) => console.log("Canera lists: ", data));
    loadAll();
  } catch (error) {
    console.error("Co loi:", error.message);
  }
};

main();
