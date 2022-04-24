import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Yoga",
    description:"Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. ",
  },
  {
    _id: uuid(),
    categoryName: "Exercise",
    description:
      "Exercise is a subset of physical activity that is planned, structured, and repetitive and has as a final or an intermediate objective the improvement or maintenance of physical fitness.",
  },
  {
    _id: uuid(),
    categoryName: "Pilates",
    description:
      "Pilates is a system of repetitive exercises performed on a mat or other equipment to promote strength, stability, and flexibility.",
  },
  {
    _id: uuid(),
    categoryName: "Zumba",
    description:
      "Zumba is a form of aerobic fitness exercise based on Latin American dance rhythms",
  },
];
