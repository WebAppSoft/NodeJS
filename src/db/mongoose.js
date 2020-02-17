const mongoose = require("mongoose");
//const connectionstring = 'mongodb://f03cc05f-0ee0-4-231-b9ee:xQbityLE9YkOg8T7NivmdC5vCiiyxqa9tOPMICJbxA8AkXZWFUMDdPaDeg5LLyrEutYDHJochNoxekIgaxN7Hw==@f03cc05f-0ee0-4-231-b9ee.documents.azure.com:10255/task-manager-api?ssl=true&replicaSet=globaldb'
const connectionstring =
  "mongodb+srv://icepear:ice@0611@cluster0-kj3ov.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionstring, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
