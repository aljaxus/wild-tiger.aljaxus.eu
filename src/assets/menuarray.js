export default {
  foods: [
    {
      name: 'Appetizers',
      items: [
        {
          name: 'Crispy Egg Rolls',
          description: 'Silver noodle, dried mushroom, cabbage and carrot served with plum sauce.',
          price: 4.5,
          imgUrl: null
        },
        {
          name: 'Crispy Tofu',
          description: 'Crispy Japanese tofu served with sweet chili sauce and peanut.',
          price: 4.5,
          imgUrl: null
        },
        {
          name: 'Fresh Rolls',
          description: 'Bean spouts, lettuce, cilantro and soft rice noodle wrapped in fresh rice paper served with homemade peanut dipping sauce.',
          price: {
            Tofu: 4.5,
            Shrimp: 6
          },
          imgUrl: null
        },
        {
          name: 'Crab Puffs',
          description: 'Crispy wonton filled with imitation crab meat and cream cheese served with plum sauce',
          price: 6.5,
          imgUrl: null
        },
        {
          name: 'Coconut Prawn',
          description: 'Crispy prawn with coconut shaving served with plum sauce.',
          price: 7.5,
          imgUrl: null
        },
        {
          name: 'Wild Tiger Wings',
          description: 'Marinated chicken wing, lightly breaded and fried until golden and crispy.',
          price: 8.5,
          imgUrl: null
        },
        {
          name: 'Satay Chicken',
          description: 'Grilled marinated chicken skewers served with peanut sauce and cucumber sauce.',
          price: 8.5,
          imgUrl: null
        },
        {
          name: 'Pot Sticker',
          description: 'Fried pork and cabbage dumpling served with ginger soy dipping sauce.',
          price: 6,
          imgUrl: null
        },
        {
          name: 'Golden Triangle',
          description: 'Ground chicken and shrimp wrapped in a flour trailla deep-fried.',
          price: 8.5,
          imgUrl: null
        },
        {
          name: 'Steam Mussels',
          description: 'Steam blue mussels with aromatic lemongrass and set in basil broth.',
          price: 9,
          imgUrl: null
        },
        {
          name: 'Crispy Calamari',
          description: 'Crispy calamari served with Siracha cream sauce.',
          price: 10,
          imgUrl: null
        }
      ]
    },
    {
      name: 'Soups',
      items: [
        {
          name: 'Tom Yum',
          description: 'Spicy lemongrass broth soup with kaffir, tomato, mushroom, onion and lime juice.',
          price: {
            Chicken: 8.95,
            Tofu: 8.95,
            Vegetable: 8.95,
            Beef: 10,
            Pork: 10,
            Shrimp: 12,
            Seafood: 14
          },
          spice: 2,
          imgUrl: null
        },
        {
          name: 'Tom Kha',
          description: 'Galangal, lemongrass, kaffir leaves, mushroom, cabbage, lime juice and coconut milk.',
          price: {
            Chicken: 8.95,
            Tofu: 8.95,
            Vegetable: 8.95,
            Beef: 10,
            Pork: 10,
            Shrimp: 12,
            Seafood: 14
          },
          imgUrl: null
        },
        {
          name: 'Shrimp Wonton Soup',
          description: 'Shrimp wonton, shrimp, lettuce and bean sprout in clear broth soup.',
          price: {
            Chicken: 8.95,
            Tofu: 8.95,
            Vegetable: 8.95,
            Beef: 10,
            Pork: 10,
            Shrimp: 12,
            Seafood: 14
          },
          imgUrl: null
        }
      ]
    },
    {
      name: 'Salads',
      items: [
        {
          name: 'House Salad',
          description: 'Crispy tofu, hardboiled egg, lettuce, cucumber, grape tomato, red onion and cilantro served with curry peanut sweet and sour sauce.',
          price: 7,
          additions: [
            {
              name: 'Grilled chicken',
              price: 4
            }
          ],
          imgUrl: null
        },
        {
          name: 'Papaya Salad',
          description: 'Shredded green papaya, Thai chili, green bean, tomato and peanut with spicy lime dressing.',
          price: 8,
          additions: [
            {
              name: 'Grilled shrimp',
              price: 4
            }
          ],
          imgUrl: null
        },
        {
          name: 'Glass Noodle Salad',
          description: 'Steam glass noodle, ground chicken, shrimp, squid, onion, red onion, mint, cilantro tossed with chili lime juice and sweet chili paste.',
          price: 12.95,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Beef Salad',
          description: 'Grilled beef sirloin, tomato, cucumber, red onion, bell pepper, mints and cilantro with spicy lime dressing.',
          price: 12,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Larb',
          description: 'Ground chicken roosted rice powder, red onion, mints, cilantro, tossed with chili lime juice.',
          price: 11.95,
          additions: [],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Stir-Fried',
      description: 'Served with steamed rice. ​Substitute brown rice add $1 Choice of Chicken, Tofu, Vegetable $11, Beef or Pork $12, Shrimp $14, Seafood $16',
      items: [
        {
          name: 'Stir-Fried Cashew Nut',
          description: 'Onion, celery, bell pepper, carrot, and cashew nut in roasted sweet chili sauce.',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/cashew_orig.jpg'
        },
        {
          name: 'Stir-Fried Fresh Ginger',
          description: 'Fresh ginger, mushroom, onion, carrot, and bell pepper.',
          price: null,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Stir-Fried Garlic',
          description: 'Sautéed roasted garlic, onion, mushroom, and cilantro in black pepper sauce over a bed of broccoli.',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/garlic_orig.jpg'
        },
        {
          name: 'Stir-Fried Mixed Vegetables',
          description: 'Stir-fried mixed vegetables in a wok with garlic soy sauce.',
          price: null,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Pra Ram',
          description: 'Steamed mixed vegetables topped with house peanut sauce.',
          price: null,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Stir-Fried Basil',
          description: 'Stir-fried ground chicken with bell pepper, green bean, onion and basil.',
          price: 11.95,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/stir-fried-basil_orig.jpg'
        },
        {
          name: 'Stir-Fried Eggplant',
          description: 'Onion, bell pepper, eggplant, and basil in roasted sweet chili sauce.',
          price: null,
          additions: [],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Curries',
      description: 'Served with steamed rice. Substitute brown rice add $1 Choice of Chicken, Tofu, Vegetable $11, Beef or Pork $12 Shrimp $14, Seafood $16',
      items: [
        {
          name: 'Red Curry',
          description: 'Red curry with coconut milk, bamboo shoot, bell pepper, and basil.',
          price: null,
          spice: 2,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Green Curry',
          description: 'Green curry with coconut milk, bamboo shoot, bell pepper, eggplant and basil.',
          price: null,
          spice: 2,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/green-curry_orig.jpg'
        },
        {
          name: 'Yellow Curry',
          description: 'Yellow curry with coconut milk, potato, onion, carrot and sprinkled with shallots.',
          price: null,
          spice: 1,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Panang Curry',
          description: 'A Panang curry with coconut milk, green bean, and bell peppers topped with ground peanut.',
          price: null,
          spice: 2,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/panang_orig.jpg'
        },
        {
          name: 'Mussaman Curry',
          description: 'A mild slow cooked curry made with a blend of spices including nutmeg, cumin and cloves in coconut milk with onion, carrot, potato, and peanuts.',
          price: null,
          spice: 1,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Jungle Curry (no coconut milk)',
          description: 'Spicy clear red curry with Thai herbs, fresh vegetables, bamboo shoot, mushroom, bell pepper and basil.',
          price: null,
          spice: 3,
          additions: [],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Noodles',
      items: [
        {
          name: 'Pad Thai',
          description: 'Stir-fried wide-size rice in tamarind sauce with egg, bean sprout, and green onion served with chopped peanuts.',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/pad-thai_orig.jpg'
        },
        {
          name: 'Drunken Noodle',
          description: 'desc',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/drunken-noodle_orig.jpg'
        },
        {
          name: 'Pad SEE-IEW',
          description: 'Stir-fried wide-size rice noodle with egg, carrot, broccoli, and sweet soy sauce.',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/pad-z-ew_orig.jpg'
        },
        {
          name: 'Pad Woon-Sen',
          description: 'Stir-fried bean thread with mushroom, cabbage, onion, celery, carrot, grape tomato, bean sprout and egg.',
          price: null,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Wild Tiger Noodle',
          description: 'Stir-fried wide-size rice noodle with egg, cabbage, onion, and bean sprout in house soy sauce.',
          price: null,
          additions: [],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Noodles soups',
      items: [
        {
          name: 'Tom Yum Noodle Soup',
          description: 'Rice noodle or egg noodle with ground chicken, squid, shrimp, and mussle, bean sprout topped with chopped peanuts.',
          price: 12.95,
          spice: 2,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/tom-yum-noodle_orig.jpg'
        },
        {
          name: 'Clear Broth Noodle Soup',
          description: 'Clear broth small rice noodle soup with bean sprout, cilantro and green onion.',
          price: {
            'Tofu': 11,
            'Chicken': 11,
            'Beef': 12
          },
          additions: [],
          imgUrl: null
        },
        {
          name: 'Khao Soi',
          description: 'Egg noodle, shallot, cilantro in curry soup topped with crispy egg noodle.',
          price: {
            'Tofu': 11,
            'Chicken': 11,
            'Beef': 12
          },
          spice: 1,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/khao-soi_orig.jpg'
        }
      ]
    },
    {
      name: 'Fried Rice',
      items: [
        {
          name: 'Traditional Thai Fried Rice',
          description: 'Stir-fried rice with egg, onion, grape tomato, peas, and carrots',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/traditional-fried-rice-shrimp_orig.jpg'
        },
        {
          name: 'Pineapple Fried Rice',
          description: 'Stir-fried rice with curry powder, egg, pineapple, cashew nut, raisins, onion, grape tomato, pea and carrot.',
          price: null,
          additions: [],
          imgUrl: 'https://wildtigerwa.net/uploads/7/9/6/8/79685034/pineapple-fried-rice-chicken_orig.jpg'
        },
        {
          name: 'Basil Fried Rice ',
          description: 'Stir-fried rice with egg, bell pepper, onion, and basil.',
          price: null,
          additions: [],
          imgUrl: null
        }
      ]
    },
    {
      name: 'House Specials',
      items: [
        {
          name: 'Panang Curry Jumbo Prawn',
          description: 'Grilled jumbo prawn topped with panang curry, bell pepper, green bean and asparagus.',
          price: 17,
          spice: 2,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Volcano Beef',
          description: 'Stir fried beef sirloin, tomato, onion, asparagus, bell pepper, pineapple, grape tomato in house specials sauce',
          price: 16,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Three flavors Salmon',
          description: 'Pan fried sockeye salmon, topped with three flavor dressing, green bean, onion and bell pepper topped with crispy basil',
          price: 15,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Terriyaki Chicken',
          description: 'Charcoal boiled chicken served with steamed vegtable and rice',
          price: 13,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Crispy Duck Curry',
          description: 'Red curry with half roasted duck, pineapple, bell pepper, grape tomatoes, lychee and basil.',
          price: 21,
          spice: 2,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Pumpkin Curry',
          description: 'Red curry with half roasted duck, pineapple, bell pepper, grape tomatoes, lychee and basil.',
          price: 21,
          spice: 2,
          additions: [],
          imgUrl: null
        },
        {
          name: 'Dungeness Crab Fried Rice',
          description: 'Golden pumpkin, lychee, bell pepper and basil inred curry sauce.',
          price: {
            'Chicken': 13,
            'Pork': 13,
            'Beef': 13,
            'Tofu': 13,
            'Grilled shrimp': 17
          },
          additions: [],
          imgUrl: null
        },
        {
          name: 'Lemongrass Chicken',
          description: 'Grilled marinated lemongrass chicken with steamed vegetable and topped with peanut sauce.',
          price: 13,
          additions: [
            {
              name: 'Pad thai',
              price: 1
            }
          ],
          imgUrl: null
        }
      ]
    }
  ],
  drinks: [
    {
      name: 'Beer',
      items: [
        {
          name: 'Lemongrass Chicken',
          description: 'Grilled marinated lemongrass chicken with steamed vegetable and topped with peanut sauce.',
          price: 13,
          additions: [
            {
              name: 'Pad thai',
              price: 1
            }
          ],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Wine',
      items: [
        {
          name: 'Lemongrass Chicken',
          description: 'Grilled marinated lemongrass chicken with steamed vegetable and topped with peanut sauce.',
          price: 13,
          additions: [
            {
              name: 'Pad thai',
              price: 1
            }
          ],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Wine',
      items: [
        {
          name: 'Lemongrass Chicken',
          description: 'Grilled marinated lemongrass chicken with steamed vegetable and topped with peanut sauce.',
          price: 13,
          additions: [
            {
              name: 'Pad thai',
              price: 1
            }
          ],
          imgUrl: null
        }
      ]
    },
    {
      name: 'Long Drink',
      items: [
        {
          name: 'Long Island Iced Tea',
          description: 'Vodka, Gin, Tequila, Rum, Triple sec,Sour mix, and Splash of Coke',
          price: 9,
          imgUrl: null
        },
        {
          name: 'Lynsbrege Lemonade',
          description: 'Jack Daniels, Triple Sec, Lemon Juice, Simple Syrub and Soda',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Bangkok Mule',
          description: 'Yazi Vodka Ginger Beer, Lime Juice, and Thai Spice',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Tequila Sunrise',
          description: 'Tequila, Orange Juice',
          price: 7,
          imgUrl: null
        },
        {
          name: 'Washington Black Apple',
          description: 'Black Whiskey, Sour Apple Schnapps, and Cranberry Juice',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Mojito',
          description: 'Muddles Fresh Mint, Silver Rum, Triple Sec, Lime Juice, top with Soda',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Mai Tai',
          description: 'Silver Rum, Amaretto, Pineapple Juice, Sour Mix, and Garnadines',
          price: 9,
          imgUrl: null
        }
      ]
    },
    {
      name: 'Martini’s',
      items: [
        {
          name: 'Lemon Drop',
          description: 'Citron Vodka, Simple syrub, Triple sec and lemon juice',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Banana Banshee',
          description: 'Banana Liquor, Creme De Cacao and Cream',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Chambord Kamikaze',
          description: 'Viscova Vodka, Lime Juice, Triple Sec and Chambord',
          price: 9,
          imgUrl: null
        },
        {
          name: 'Oregon Apple',
          description: 'Pendleton Whiskey, Sour Apple Schnapps, and Cranberry Juice',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Yazitini',
          description: 'Yazi Ginger Vodka, Tripple Sec, Cranberry Juice and Lime Juice',
          price: 8,
          imgUrl: null
        },
        {
          name: 'Saturn Martini',
          description: 'Orange Vodka, Muddled Lemon, Simple Syrub, Sour Mix, and Touch of Chambord',
          price: 9,
          imgUrl: null
        },
        {
          name: 'Hot n’ Dirty Martini',
          description: 'Pepper Vodka and Splash of Olive Juice',
          price: 8,
          imgUrl: null
        }
      ]
    }
  ]
}