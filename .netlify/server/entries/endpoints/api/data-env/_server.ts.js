import { t as text } from "../../../../chunks/index.js";
const GET = () => {
  const value = getDataEnv(process.env["ENV_NAME"] || "netlify");
  return text(value);
};
const getDataEnv = (envName) => {
  if (["local", "netlify", "sandbox"].includes(envName)) {
    return "dev";
  } else if ((process.env["IS_PUBLISHING"] || "false").toLowerCase() === "true") {
    return "publishing";
  } else {
    return "web";
  }
};
export {
  GET
};
