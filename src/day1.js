const alertItem = {
  id: 1,
  type: "Giao thong",
  ward: "Phu Hoi",
  status: "new",
};
const alertItem2 = {
  id: 2,
  type: "Chay",
  ward: "An cuu",
  status: "new",
};
const alertItem3 = {
  id: 3,
  type: "Trat tu do thi",
  ward: "Phu Hoi",
  status: "new",
};

let message = "Canh bao moi";
message = message + " - uu tien xu ly";

alertItem.status = "processing";

alertItem.createdAt = new Date().toLocaleString();
alertItem2.createdAt = new Date().toLocaleString();
alertItem3.createdAt = new Date().toLocaleString();

alertItem.rainLevel = "Mua to";
alertItem2.rainLevel = "Mua nhe";
alertItem3.rainLevel = "Khong mua";

alertItem.cameraId = 3;
alertItem2.cameraId = 4;
alertItem3.cameraId = 5;

const showWarning = (item) => {
  return `Canh bao ${item.type} tai ${item.ward} dang o trang thai ${item.status}`;
};

console.log(message);
console.log(alertItem);
console.log(showWarning(alertItem3));
