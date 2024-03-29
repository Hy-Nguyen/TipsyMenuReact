const { MongoClient } = require("mongodb");

let client;
async function search() {
  try {
    // Replace with your MongoDB connection URI
    const uri =
      "mongodb+srv://vercel-admin-user:h5h32CUHOASOwwk5@cluster0.1fu34kg.mongodb.net/TipsyMenu?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const database = client.db();

    const quanity =
      database.collection("chicken");
    const sandwich = database.collection(
      "chicken_sandwich"
    );
    const drinks = database.collection("drinks");
    const partyon =
      database.collection("party_on");
    const pregame =
      database.collection("pre_game");
    const add_on = database.collection("add_on");

    const chicken = [
      {
        bone_in: [
          {
            quantity: 7,
            "price": 14.25,
          },
          {
            quantity: 14,
            "price": 26.25,
          },
          {
            quantity: 21,
            "price": 39.25,
          },
        ],
        boneless: [
          {
            quantity: 7,
            "price": 14.75,
          },
          {
            quantity: 14,
            "price": 26.75,
          },
          {
            quantity: 21,
            "price": 39.75,
          },
        ],
      },
    ];
    const chickenSandwich = {
      "name": "Chicken Sandwich",
      "price": 14.25,
      "description":
        "Perfectly fried chicken in a Brioche bun, topped with pepper jack cheese, kimchi mayo, and caramelized onion. Served with a side of fries.",
    };
    const drinksData = [
      {
        Category: "Beer & Soju",
        items: [
          {
            "name": "Cass (500ml)",
            "price": 7.95,
          },
          {
            "name": "Modelo // Sapporo",
            "price": 4.95,
          },
          {
            "name": "Soju ",
            "price": 12.95,
            flavors:
              "Classic, lychee, mango, peach, pineapple, strawberry, yogurt.",
          },
          {
            "name": "Soju Bomb",
            "price": 17.95,
            "description":
              "Cass beer + your choice of soju bottle!",
          },
        ],
      },
      {
        Category: "Soft Drinks",
        item: {
          "name": "Coke, Diet Coke, Sprite, Arizona Sweet Tea",
          "price": 2.5,
        },
      },
      {
        Category: "cocktails",
        items: [
          {
            "name": "Above the Clouds ",
            "price": 13.95,
            ingredients:
              "Soju, yuzu, rose flower, egg white foam, lychee, rose petal garnish.",
          },
          {
            "name": "Day Booster ",
            "price": 13.95,
            ingredients:
              "Soju, rum, yuzu, strawberry jam, ginger beer, mint garnish.",
          },
          {
            "name": "Day Break ",
            "price": 13.95,
            ingredients:
              "Soju, tangerine juice, grenadine, dried orange garnish:",
          },
          {
            "name": "Seasonal Cocktal ",
            "price": 13.95,
            ingredients:
              "Ask our server team for details!",
          },
        ],
      },
      {
        Category: "Pitchers",
        milkyway: {
          "name": "Milky Way Pitcher",
          ingredients: "Cass, Milkis",
          "price": 17.95,
        },
        soju: {
          "name": "Soju Pitcher",
          ingredients:
            "The party classic of Sprite, Yakult and your choice of Soju",
          "price": 22.95,
        },
      },
    ];
    const party_on = [
      {
        "name": "Bulgogi Beef",
        "price": 19.5,
        "description":
          "Sweet Korean Bulgogi, onions, served with a side of rice.",
      },
      {
        "name": "Bulgogi Fries ",
        "price": 16.95,
        "description":
          "Crispy french fries topped with bulgogi beef, onions, cheese & tipsy sauce or truffle garlic mayo.",
      },
      {
        "name": "Kimchi Fried Rice ",
        "price": 18.95,
        "description":
          "Served with an egg & your choice of bulgogi beef, pork belly, or spam.",
      },
      {
        "name": "Pork Belly Corn Cheese ",
        "price": 16.95,
        "description":
          "Corn cheese with house special grilled pork belly.",
      },
      {
        "name": "Rosé Tteokbokki",
        "price": 16.5,
        "description":
          "Rice cakes served in cheesy rose sauce with a boiled egg & fish cakes.",
      },
      {
        "name": "Spicy Tteokbokki ",
        "price": 14.5,
        "description":
          "Rice cakes served with a boiled egg & fish cakes.",
      },
    ];
    const pre_game = [
      {
        "name": "Corn Cheese",
        "price": 12.95,
        "description":
          "Melted mozzarella cheese in sizzling corn topped with green onions. It's corn!",
      },
      {
        "name": "Fried Mandu",
        "price": 8.95,
        "description":
          "7 pieces - Mixture of pork and vegetable fillings, fried to perfection. Paired with savory soy garlic sauce.",
      },
      {
        "name": "Rice Cake & Sausage Skewers",
        "price": 9.95,
        "description":
          "Rice cakes & Korean sausages with sweet & spicy glaze.",
      },
      {
        "name": "Sautéed Corn with Mini Shrimps",
        "price": 11.95,
        "description": "",
      },
      {
        "name": "Tipsy Fries ",
        "price": 8.95,
        "description":
          "Cripsy French fries served with our tipsy sauce or truffle garlic mayo.",
      },
    ];
    const addOn = [
      {
        "name": "Extra Protein",
        "price": 2.95,
      },
      {
        "name": "Extra Cheese ",
        "price": 1.95,
      },
      {
        "name": "Fried Mandu",
        "price": 4.95,
      },
    ];






    add_on.insertMany(addOn);

    console.log(
      "!!\nCollection populated successfully!\n!!"
    );
  } catch (error) {
    console.error(
      "Error populating collection:",
      error
    );
  }
  client.close();
}

search();
