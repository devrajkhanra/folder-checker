export function detectUserEnvironment(): [string, string] | null {
  const operatingSystem: string = process.platform;

  if (
    operatingSystem === "win32" ||
    operatingSystem === "linux" ||
    operatingSystem === "darwin"
  ) {
    const homeDirectory: string = require("os").homedir();
    return [operatingSystem, homeDirectory];
  } else {
    console.error("Unsupported operating system");
    return null;
  }
}
