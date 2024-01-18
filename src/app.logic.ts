import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const {b:base,l:limit,s:showTable} = yarg;

// const limit: number = yarg.l;
// const base: number = yarg.b;
let content: string = "";
const fileName: string = `tabla-${base}.txt`;
const ruteFile: string = `./output/${fileName}`;

content += `
==============================
        Tabla del ${base}
==============================\n`;

for (let i = 1; i <= limit; i++) {
  content += `${base} x ${i} = ${base * i}\n`;
}

try {
  fs.mkdirSync("output", { recursive: true });
  fs.writeFileSync(ruteFile, content);
} catch (error) {
  console.log("Error saver file");
}

if (showTable) console.log(content);
