import "dotenv/config";

export const config = {
  port: parseInt(process.env.PORT || "3000", 10),
  allowedOrigins: (process.env.ALLOWED_ORIGINS || "http://localhost:3000").split(","),
};
