import fs from "fs";

export interface SaveFileUseCase {
  excute: (options: Options) => boolean;
}

export interface Options {
  fileContent: string;
  destination: string;
  fileName: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {
    /** repository: StorageRepository */
  }

  excute({ fileContent, destination, fileName }: Options): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.log("Error saver file");
      return false;
    }
  }
}
