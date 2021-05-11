const cpus = [];
const hdds = [];
const gpus = [];
const motherboards = [];
const rams = [];
const powerSupplys = [];
const cases = [];

const readData = (array, path) => {
  fetch(`data/${path}.json`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => array.push(item));
      return data;
    });
  return array;
};

readData(cpus, "cpus");
readData(cases, "cases");
readData(gpus, "gpus");
readData(hdds, "harddrives");
readData(motherboards, "motherboards");
readData(rams, "rams");
readData(powerSupplys, "power_supplys");