interface JsonData {
  [key: string]: any;
}

export function generateJsonFile(
  fileName: string,
  data: JsonData,
  directory: string = "./src/designConfig/",
  fs: any,
  path: any
) {
  // Ensure the directory exists
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // Create the full file path
  const filePath = path.join(directory, fileName);

  // Write the JSON data to the file
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}
