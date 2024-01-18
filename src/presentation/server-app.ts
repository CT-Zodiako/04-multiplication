import { CreateTable } from "../domain/uses-cases/create-table.use-case";
import { SaveFile } from "../domain/uses-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  fileName: string;
}

export class ServerApp {
  static run({ base, limit, showTable, destination, fileName }: RunOptions) {
    console.log("Server running...");

    const table = new CreateTable().excute({ base, limit });
    const wasCreate = new SaveFile().excute({
      fileContent: table,
      destination,
      fileName,
    });

    if (showTable) console.log(table);
    wasCreate ? console.log("File saved") : console.log("Error saver file");
  }
}
