import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./styles";
const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "5$",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eH-Ri6GXm3bDowl0lWOuVNMzAQp0wUrJbXcDFokKgSvLd-4q8fMC6QecmmFwmNL9_RW_W1A&usqp=CAc",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple",
    price: "5$",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gx7aXaJHQV5qbFFQg_BeRmPTWm1RCtwGkQJiTy22CpF32MPeQub6tghp&usqp=CAc",
  },
];
const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
