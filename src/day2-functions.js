const formatAlertTitle = (alert) => {
  return `${alert.type} - ${alert.ward}`;
};
const isUrgentAlert = (alert) =>
  alert.type === "Chay" || alert.status === "new";
console.log(formatAlertTitle({ type: "Chay", ward: "Huong So" }));
console.log(isUrgentAlert({ type: "Chay", status: "new" }));

const toTaskPayload = (alert) => {
  return JSON.parse(alert);
};

const temp =
  '{"type": "Giao thong",  "ward": "Phu Hoi",  "status": "pending",  "createdAt": "2024-06-20 10:00:00",  "rainLevel": "khong mua", "cameraId": "5"}';

console.log(toTaskPayload(temp));
const tempData = [
  { ma: "19753", ten: "Phú Xuân", loai: "phuong" },
  { ma: "19774", ten: "Kim Long", loai: "phuong" },
  { ma: "19777", ten: "Vỹ Dạ", loai: "phuong" },
  { ma: "19789", ten: "Thuận Hóa", loai: "phuong" },
];
const getWardLabel = (code) => {
  return tempData.find((item) => item.ma === code)?.ten || "Khong xac dinh";
};
console.log("getWardLabel", getWardLabel("19753"));
