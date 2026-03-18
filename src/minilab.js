const loadAlerts = async () => {
  const fs = require("fs").promises;
  const raw = await fs.readFile("data/alerts.json", "utf-8");
  const data = JSON.parse(raw);
  return data.map((item) => ({
    ...item,
    createdAt: new Date(
      new Date(2025, 1, 1).getTime() +
        Math.random() *
          (new Date(2026, 1, 1).getTime() - new Date(2025, 1, 1).getTime()),
    ).toLocaleDateString("en-GB"),
  }));
};

const filterByWard = (alerts, wardName) => {
  return alerts.filter(
    (alert) => alert.ward.toUpperCase() === wardName.toUpperCase(),
  );
};

const summarizeByType = (alerts) => {
  return alerts.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});
};

const summarizeByRainLevel = (alerts) => {
  return alerts.reduce((acc, item) => {
    acc[item.rainLevel] = (acc[item.rainLevel] || "") + item.ward + ", ";
    return acc;
  }, {});
};

const sortByCreatedAtDesc = (alerts) => {
  return [...alerts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
};

const main = async () => {
  try {
    const fs = require("fs").promises;

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const alerts = await loadAlerts();
    // console.log(alerts);
    const pendingAlerts = alerts.filter((alert) => alert.status !== "done");
    await fs.writeFile(
      "output/pending-alerts.json",
      JSON.stringify(pendingAlerts, null, 2),
      "utf-8",
    );

    await new Promise((resolve) => {
      readLine.question("Nhập tên phường: ", async (wardName) => {
        filterByWard(alerts, wardName);
        readLine.close();
        resolve();
      });
    });
    await fs.writeFile(
      "output/statistics.json",
      JSON.stringify(
        {
          allAlerts: alerts,
          byType: summarizeByType(alerts),
          byRainLevel: summarizeByRainLevel(alerts),
          sortedByDate: sortByCreatedAtDesc(alerts),
          findByName: (wardName) => filterByWard(alerts, wardName),
        },
        null,
        2,
      ),
      "utf-8",
    );
  } catch (error) {
    console.error("Loi khi doc/parse file:", error.messsage);
  }
};

main();
