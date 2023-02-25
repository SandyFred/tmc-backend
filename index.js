const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Succesfully connected to DB");
    app.listen(8080, () => {
      console.log("Server listening on port 3000");
    });
  })
  .catch((error) => console.log("Not connected to DB", error));
