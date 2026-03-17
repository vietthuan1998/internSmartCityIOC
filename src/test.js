const getCameraList = () => Promise.resolve([{ id: "CAM01" }]);
const getTaskList = () => Promise.resolve([{ id: 101 }]);

const loadAll = async () => {
  const [alerts, cameras] = await Promise.all([getTaskList(), getCameraList()]);

  console.log(alerts.length, cameras.length);
};
loadAll();
