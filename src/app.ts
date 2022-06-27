import { createExpressSever } from "./module/express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const bootstrap = async () => {
  const [server, io] = createExpressSever();

  io.on("connection", (socket: any) => {
    console.log("a user connected");
  });

  server.listen(PORT, () => {
    console.log(`🚀 server is running ont ${PORT}`);
  });
};
export { bootstrap };
