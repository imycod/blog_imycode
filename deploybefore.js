// Read the target directory
// Require the Node.js File System module
const fs = require("fs");

// Set the target directory
const targetDirectory = "E:/work/imycod.github.io/docs/project";

function recursiveImageURLReplace(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;

        // Loop through the files in the directory
        files.forEach((file) => {
            const fileName = directory + "/" + file;

            // Check if the file is a directory
            if (fs.lstatSync(fileName).isDirectory()) {
                // If it is a directory, perform the same actions on it
                recursiveImageURLReplace(fileName);
            }
            
            // Check if the file is an md file
            if (file.split(".").pop() === "md") {
                // Read the md file
                fs.readFile(fileName, "utf8", (err, data) => {
                    if (err) throw err;
                    // Replace the image url with the new url
                    const newData = data.replace(/E:\\work\\imycod.github.io\\docs\\public\\/g, "/");

                    // Write the new data to the file
                    fs.writeFile(fileName, newData, "utf8", (err) => {
                        if (err) throw err;
                    });
                });
            }
        });
    });
}

// Call the function
recursiveImageURLReplace(targetDirectory);


// Note: Replace "/path/to/target/directory" with the actual target directory.