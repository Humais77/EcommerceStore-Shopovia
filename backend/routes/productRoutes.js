// const express = require("express");
// const Product = require("../models/Products");
// const { protect, admin } = require("../middleware/authMiddleware");
// const router = express.Router();
// router.post("/", protect, admin, async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       price,
//       discountedPrice,
//       countInStock,
//       category,
//       brand,
//       sizes,
//       colors,
//       collections,
//       material,
//       gender,
//       images,
//       isFeatured,
//       isPublished,
//       tags,
//       dimensions,
//       weight, // fixed typo
//       sku
//     } = req.body;

//     const product = new Product({
//       name,
//       description,
//       price,
//       discountedPrice,
//       countInStock,
//       category,
//       brand,
//       sizes,
//       colors,
//       collections,
//       material,
//       gender,
//       images,
//       isFeatured,
//       isPublished,
//       tags,
//       dimensions,
//       weight, // fixed typo
//       sku,
//       user: req.user._id
//     });

//     const createdProduct = await product.save();
//     res.status(201).json(createdProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });
// router.put("/:id", protect, admin, async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       price,
//       discountedPrice,
//       countInStock,
//       category,
//       brand,
//       sizes,
//       colors,
//       collections,
//       material,
//       gender,
//       images,
//       isFeatured,
//       isPublished,
//       tags,
//       dimensions,
//       weight, // fixed typo
//       sku
//     } = req.body;
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       product.name = name || product.name;
//       product.description = description || product.description;
//       product.price = price || product.price;
//       product.discountedPrice = discountedPrice || product.discountedPrice;
//       product.countInStock = countInStock || product.countInStock;
//       product.category = category || product.category;
//       product.brand = brand || product.brand;
//       product.sizes = sizes || product.sizes;
//       product.colors = colors || product.colors;
//       product.collections = collections || product.collections;
//       product.material = material || product.material;
//       product.gender = gender || product.gender;
//       product.images = images || product.images;
//       product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
//       product.isPublished = isPublished !== undefined ? isPublished : product.isPublished;
//       product.tags = tags || product.tags;
//       product.dimensions = dimensions || product.dimensions;
//       product.weight = weight || product.weight;
//       product.sku = sku || product.sku;
//       const updatedProduct = await product.save();
//       res.json(updatedProduct);
//     } else {
//       res.status(404).json({ message: "Product not found" });
//     }

//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error")
//   }
// });
// router.delete("/:id", protect, admin, async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       await product.deleteOne();
//       res.json({ message: "Product removed" });
//     } else {
//       res.status(404).json({ message: "Productt not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error")

//   }
// });
// router.get("/", async (req, res) => {
//   try {
//     const { collection, size, color, gender, minPrice, maxPrice, sortBy, search, category, material, brand, limit } = req.query;
//     let query = {};
//     if (collection && collection.toLocaleLowerCase() !== "all") {
//       query.collections = collection;
//     }
//     if (category && category.toLocaleLowerCase() !== "all") {
//       query.category = category;
//     }
//     if (material) {
//       query.material = { $in: material.split(",") }
//     }
//     if (brand) {
//       query.brand = { $in: brand.split(",") }
//     }
//     if (size) {
//       query.sizes = { $in: size.split(",") }
//     }
//     if (color) {
//       query.colors = { $in: [color] };
//     }
//     if (gender) {
//       query.gender = gender;
//     }
//     if (minPrice || maxPrice) {
//       query.price = {};
//       if (minPrice) query.price.$gte = Number(minPrice);
//       if (maxPrice) query.price.$lte = Number(maxPrice);
//     }
//     if (search) {
//       query.$or = [
//         { name: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } }
//       ];

//     }
//     let sort = {};
//     if (sortBy) {
//       switch (sortBy) {
//         case "priceAsc":
//           sort = { price: 1 };
//           break;
//         case "priceDesc":
//           sort = { price: -1 };
//           break;
//         case "popularity":
//           sort = { rating: -1 };
//           break;
//         default:
//           break;
//       }
//     }
//     let products = await Product.find(query).sort(sort).limit(Number(limit) || 0);
//     res.json(products);

//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });
// router.get("/best-seller", async (req, res) => {
//   try {
//     const bestSeller = await Product.findOne().sort({ rating: -1 });
//     if (bestSeller) {
//       res.json(bestSeller);
//     } else {
//       res.status(404).json({ message: "No best seller found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error")
//   }
// })
// router.get("/new-arrivals", async (req, res) => {
//   try {
//     const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
//     res.json(newArrivals);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error")
//   }
// })



// router.get("/similar/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await Product.findById(id);
//     if (!product) {
//       return res.status(404).json({ message: "Prduct not found" });
//     }
//     const similarProducts = await Product.find({
//       _id: { $ne: id },
//       gender: product.gender,
//       category: product.category,

//     }).limit(4);
//     res.json(similarProducts)
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });
// router.get("/:id", async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: "Product Not Found" });
//     }
//   } catch (error) {
//     console.error(error)
//     res.status(500).send("Server Error");
//   }
// });


// module.exports = router;
const express = require("express");
const Product = require("../models/Products");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Create Product
router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name, description, price, discountedPrice, countInStock,
      category, brand, sizes, colors, collections, material,
      gender, images, isFeatured, isPublished, tags,
      dimensions, weight, sku
    } = req.body;

    if (!name || !price || !description) {
      return res.status(400).json({ message: "Name, price, and description are required." });
    }

    const product = new Product({
      name, description, price, discountedPrice, countInStock,
      category, brand, sizes, colors, collections, material,
      gender, images, isFeatured, isPublished, tags,
      dimensions, weight, sku, user: req.user._id
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error("Create Product Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Update Product
router.put("/:id", protect, admin, async (req, res) => {
  try {
    const updates = req.body;
    const product = await Product.findById(req.params.id);

    if (product) {
      Object.assign(product, updates);
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }

  } catch (error) {
    console.error("Update Product Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Delete Product
router.delete("/:id", protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error("Delete Product Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Get Products with Filters
router.get("/", async (req, res) => {
  try {
    const { collection, size, color, gender, minPrice, maxPrice, sortBy, search, category, material, brand, limit } = req.query;
    let query = {};

    if (collection && collection.toLowerCase() !== "all") query.collections = collection;
    if (category && category.toLowerCase() !== "all") query.category = category;
    if (material) query.material = { $in: material.split(",") };
    if (brand) query.brand = { $in: brand.split(",") };
    if (size) query.sizes = { $in: size.split(",") };
    if (color) query.colors = { $in: [color] };
    if (gender) query.gender = gender;

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ];
    }

    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 }; break;
        case "priceDesc":
          sort = { price: -1 }; break;
        case "popularity":
          sort = { rating: -1 }; break;
        default: break;
      }
    }

    const products = await Product.find(query).sort(sort).limit(Number(limit) || 0);
    res.json(products);
  } catch (error) {
    console.error("Get Products Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Get Best Seller
router.get("/best-seller", async (req, res) => {
  try {
    const bestSeller = await Product.findOne().sort({ rating: -1 });
    if (bestSeller) {
      res.json(bestSeller);
    } else {
      res.status(404).json({ message: "No best seller found" });
    }
  } catch (error) {
    console.error("Best Seller Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Get New Arrivals
router.get("/new-arrivals", async (req, res) => {
  try {
    const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
    res.json(newArrivals);
  } catch (error) {
    console.error("New Arrivals Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Get Similar Products
router.get("/similar/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = await Product.find({
      _id: { $ne: req.params.id },
      gender: product.gender,
      category: product.category
    }).limit(4);

    res.json(similarProducts);
  } catch (error) {
    console.error("Similar Products Error:", error.message);
    res.status(500).send("Server Error");
  }
});

// Get Product by ID (MUST BE LAST)
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Get Product by ID Error:", error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
