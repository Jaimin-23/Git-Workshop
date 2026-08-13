const fs = require("fs");

//write file
// fs.writeFile("Myfile.txt", "Hello Maulik", (err) => {
//   if (err) throw err;
//   console.log("File has been written");
// });

//read file
// fs.readFile("Myfile.txt", "utf8", (err, data) => {
//   // fs.readFile("Myfile1.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Error : ", err);
//     return;
//   }
//   console.log("File Contents : ", data);
// });

//writefileSync
// const data = "Hello Maulik, This is Synchronous file writing";
// fs.writeFileSync("Myfile.txt", data);
// console.log("File has been saved synchronously");

//readFileSync
// const contentSync = fs.readFileSync("Myfile.txt", "utf8");
// console.log("File content synchronously :", contentSync);

//Append to file
//Asynchronous methods to append data to a file. If the file does not exist, it will be created.
// fs.appendFile("Myfile.txt", "\nThis is appended text", (err) => {
//   if (err) {
//     console.log("Error Appending file : ", err);
//     return;
//   }
//   console.log("File has been appended...");
// });

//unlink method is used to delete a file.
//It takes the path of the file to be deleted and a callback function as arguments.
// fs.unlink("Myfile.txt", (err) => {
//   if (err) {
//     console.log("Error deleting file : ", err);
//     return;
//   }
//   console.log("Delete File Successfully...");
// });

//fs.rename method is used to rename a file.
//It takes the old path, new path, and a callback function as arguments.
fs.rename("Myfile.txt", "MyNewFile.txt", (err) => {
  if (err) {
    console.log("Rename Error : ", err);
    return;
  } else {
    console.log("File renamed successfully...");
  }
});

// Create directory
fs.mkdir("MyFolder", (err) => {
  if (err) {
    console.log("Directory Error :", err);
    return;
  }

  console.log("Directory created successfully...");
});


//rmdir - asynchronous method to remove a directory
// syntax: fs.rmdir(path, options, callback)

// Remove directory
fs.rmdir("./myfile", (err) => {
  if (err) {
    console.log("Remove Error :", err);
    return;
  }

  console.log("Directory removed successfully...");
});

