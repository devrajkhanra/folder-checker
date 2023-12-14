import * as fs from 'fs';
import * as path from 'path';
import {detectUserEnvironment} from './environment'

export function createFolder(folderPath: string): void {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(`Created folder: ${folderPath}`);
    }
}

export function checkAndCreateFolders(homeDirectory: string): void {
    const dataFolderPath: string = path.join(homeDirectory, "Data");
    const stockFolderPath: string = path.join(dataFolderPath, "Stock");
    const indexFolderPath: string = path.join(dataFolderPath, "Index");

    createFolder(dataFolderPath);
    createFolder(stockFolderPath);
    createFolder(indexFolderPath);
}

export function runFolderChecker(): void {
    const userEnvironment = detectUserEnvironment();

    if (userEnvironment) {
        const [operatingSystem, homeDirectory] = userEnvironment;
        console.log(`Detected operating system: ${operatingSystem}`);
        console.log(`User's home directory: ${homeDirectory}`);

        checkAndCreateFolders(homeDirectory);
    }
}
