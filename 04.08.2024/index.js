const express = require("express");
const zod = require("zod");

const app = express();

const arraySchema = zod.array(zod.number());

const objectSchema = zod.object({
    email : zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.ZodDiscriminatedUnion.literal("US"))
})

app.use(express.json());

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;

  const response = arraySchema.safeParse(kidneys);
});
