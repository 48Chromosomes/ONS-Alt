import { j as json } from "../../../chunks/index.js";
const GET = ({ params }) => {
  console.log(`Health check received: ${JSON.stringify(params)}`);
  return json({ status: "OK" });
};
export {
  GET
};
