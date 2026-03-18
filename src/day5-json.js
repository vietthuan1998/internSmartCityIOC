const fs = require("fs").promises;
const run = async () => {
  try {
    const data = await fs.readFile("data/alerts.json", "utf-8");
    const rawData = JSON.parse(data);
    const pending = rawData.filter((item) => item.status !== "done");
    const type = rawData.reduce((acc, item) => {
      acc[item.type] = (acc[item.type] || 0) + 1;
      return acc;
    }, {});
    await fs.writeFile(
      "output/summary.json",
      JSON.stringify({ total: type }, null, 2),
      "utf-8",
    );
    console.log({ pending, type });

    return { pending, type };
  } catch (error) {
    console.error("Error: Khong doc duoc file", error.message);
  }
};
run();
