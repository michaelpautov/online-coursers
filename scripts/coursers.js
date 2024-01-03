 const coursers = [
  {
    "name": "Course 1",
    "description": "Description for Course 1",
    "author": "Author 1",
    "rating": 3,
    "reviews": 51512,
    "duration": "11:15:04",
    "lectures_counter": 31,
    "difficulty_level": 1,
    "is_best_seller": true,
    "languages": "Spanish",
    "price": 128,
    "comments": [
      {
        "name": "Yolanda",
        "comment": "Officia magna labore fugiat mollit laboris veniam cupidatat irure."
      },
      {
        "name": "Moore",
        "comment": "Nulla Lorem id exercitation nostrud veniam duis ad dolore."
      },
      {
        "name": "Katrina",
        "comment": "Amet laboris sunt irure cupidatat irure do sunt."
      },
      {
        "name": "Ilene",
        "comment": "Et in amet sit nulla proident laboris et dolore reprehenderit dolor reprehenderit Lorem aute."
      }
    ]
  },
  {
    "name": "Course 2",
    "description": "Description for Course 2",
    "author": "Author 2",
    "rating": 1,
    "reviews": 74257,
    "duration": "06:37:10",
    "lectures_counter": 69,
    "difficulty_level": 1,
    "is_best_seller": true,
    "languages": "Spanish",
    "price": 173,
    "comments": [
      {
        "name": "Louisa",
        "comment": "Magna tempor qui in qui magna consectetur labore."
      },
      {
        "name": "Pam",
        "comment": "Reprehenderit cillum ea qui ullamco nisi Lorem nostrud amet cillum anim do."
      },
      {
        "name": "Bradley",
        "comment": "Voluptate quis adipisicing commodo qui fugiat dolore Lorem est qui quis deserunt ex."
      }
    ]
  },
  {
    "name": "Course 3",
    "description": "Description for Course 3",
    "author": "Author 3",
    "rating": 3,
    "reviews": 75202,
    "duration": "07:44:19",
    "lectures_counter": 70,
    "difficulty_level": 3,
    "is_best_seller": true,
    "languages": "English",
    "price": 26,
    "comments": [
      {
        "name": "Josie",
        "comment": "Exercitation ex occaecat laboris reprehenderit ipsum consectetur in nisi excepteur in duis."
      }
    ]
  },
  {
    "name": "Course 4",
    "description": "Description for Course 4",
    "author": "Author 4",
    "rating": 5,
    "reviews": 50034,
    "duration": "10:56:23",
    "lectures_counter": 71,
    "difficulty_level": 1,
    "is_best_seller": true,
    "languages": "Spanish",
    "price": 148,
    "comments": [
      {
        "name": "Sherri",
        "comment": "Adipisicing proident dolore voluptate excepteur veniam nulla reprehenderit nostrud nisi occaecat enim."
      },
      {
        "name": "Mcgowan",
        "comment": "Voluptate commodo aute ea esse pariatur do velit nostrud ut eiusmod."
      },
      {
        "name": "Mccray",
        "comment": "Do anim sunt commodo dolore adipisicing cillum ullamco."
      },
      {
        "name": "Vazquez",
        "comment": "Officia esse occaecat laboris nostrud labore in magna cillum et veniam ea voluptate dolor elit."
      }
    ]
  },
  {
    "name": "Course 5",
    "description": "Description for Course 5",
    "author": "Author 5",
    "rating": 2,
    "reviews": 74707,
    "duration": "11:16:08",
    "lectures_counter": 7,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "Spanish",
    "price": 84,
    "comments": [
      {
        "name": "Peggy",
        "comment": "Aliquip pariatur fugiat id adipisicing culpa aliquip mollit magna in pariatur."
      },
      {
        "name": "Workman",
        "comment": "Sint amet eiusmod ut ipsum eiusmod elit dolor."
      },
      {
        "name": "Thelma",
        "comment": "Commodo Lorem dolor labore proident proident labore."
      },
      {
        "name": "Waller",
        "comment": "Culpa in enim incididunt commodo in dolore eiusmod adipisicing officia sint eu sit cupidatat veniam."
      }
    ]
  },
  {
    "name": "Course 6",
    "description": "Description for Course 6",
    "author": "Author 6",
    "rating": 3,
    "reviews": 97687,
    "duration": "02:52:44",
    "lectures_counter": 79,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "Korean",
    "price": 65,
    "comments": [
      {
        "name": "Weber",
        "comment": "Est do in aliqua fugiat sit est ullamco quis."
      },
      {
        "name": "Lucy",
        "comment": "Excepteur occaecat aliquip tempor id magna laboris aliqua amet exercitation veniam sint fugiat cupidatat cillum."
      },
      {
        "name": "Carr",
        "comment": "Reprehenderit commodo Lorem nisi eiusmod eu dolor minim officia excepteur ex sunt consectetur incididunt."
      },
      {
        "name": "Ana",
        "comment": "Deserunt tempor id exercitation cupidatat officia aliquip."
      }
    ]
  },
  {
    "name": "Course 7",
    "description": "Description for Course 7",
    "author": "Author 7",
    "rating": 1,
    "reviews": 56155,
    "duration": "08:09:15",
    "lectures_counter": 5,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "Spanish",
    "price": 92,
    "comments": [
      {
        "name": "Robert",
        "comment": "Labore sint nostrud non aliquip ad sint laborum reprehenderit culpa esse et velit eu."
      }
    ]
  },
  {
    "name": "Course 8",
    "description": "Description for Course 8",
    "author": "Author 8",
    "rating": 4,
    "reviews": 59088,
    "duration": "06:18:14",
    "lectures_counter": 28,
    "difficulty_level": 1,
    "is_best_seller": true,
    "languages": "Korean",
    "price": 19,
    "comments": [
      {
        "name": "Patrick",
        "comment": "Ullamco incididunt Lorem nostrud sit esse Lorem ex dolore sit."
      },
      {
        "name": "Rollins",
        "comment": "Culpa elit voluptate in occaecat ex nisi proident officia esse."
      },
      {
        "name": "Mckenzie",
        "comment": "Ad veniam adipisicing fugiat veniam officia mollit mollit aute fugiat nisi."
      },
      {
        "name": "Alexandria",
        "comment": "Amet ex dolore aliquip dolore minim ullamco in laborum aliquip duis."
      }
    ]
  },
  {
    "name": "Course 9",
    "description": "Description for Course 9",
    "author": "Author 9",
    "rating": 3,
    "reviews": 70633,
    "duration": "07:35:32",
    "lectures_counter": 58,
    "difficulty_level": 3,
    "is_best_seller": true,
    "languages": "Spanish",
    "price": 78,
    "comments": [
      {
        "name": "Craft",
        "comment": "Cupidatat ea est qui voluptate ad enim esse cillum."
      }
    ]
  },
  {
    "name": "Course 10",
    "description": "Description for Course 10",
    "author": "Author 10",
    "rating": 1,
    "reviews": 80134,
    "duration": "04:58:04",
    "lectures_counter": 25,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "Spanish",
    "price": 121,
    "comments": [
      {
        "name": "Byers",
        "comment": "Nisi excepteur aliquip ipsum deserunt ea deserunt."
      },
      {
        "name": "Norma",
        "comment": "Et qui quis ad nisi fugiat magna."
      },
      {
        "name": "Clay",
        "comment": "Officia eu esse nostrud cupidatat esse nulla eiusmod."
      }
    ]
  },
  {
    "name": "Course 11",
    "description": "Description for Course 11",
    "author": "Author 11",
    "rating": 1,
    "reviews": 37577,
    "duration": "11:55:08",
    "lectures_counter": 74,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "English",
    "price": 20,
    "comments": [
      {
        "name": "Jimenez",
        "comment": "Est eiusmod est nisi cupidatat laboris labore nisi consequat eu occaecat."
      },
      {
        "name": "Opal",
        "comment": "Officia est magna do anim velit Lorem minim voluptate do exercitation occaecat do minim."
      }
    ]
  },
  {
    "name": "Course 12",
    "description": "Description for Course 12",
    "author": "Author 12",
    "rating": 3,
    "reviews": 31083,
    "duration": "03:49:48",
    "lectures_counter": 22,
    "difficulty_level": 3,
    "is_best_seller": false,
    "languages": "Korean",
    "price": 50,
    "comments": [
      {
        "name": "Warner",
        "comment": "Proident cillum cillum pariatur cupidatat aliqua elit consectetur excepteur pariatur sint est esse."
      }
    ]
  },
  {
    "name": "Course 13",
    "description": "Description for Course 13",
    "author": "Author 13",
    "rating": 1,
    "reviews": 53786,
    "duration": "01:33:39",
    "lectures_counter": 3,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "Korean",
    "price": 12,
    "comments": [
      {
        "name": "Jami",
        "comment": "Sit consectetur mollit incididunt incididunt dolore enim Lorem mollit in aute aliqua adipisicing aute aliquip."
      },
      {
        "name": "Dionne",
        "comment": "Deserunt nisi ut ad sunt esse ad occaecat."
      }
    ]
  },
  {
    "name": "Course 14",
    "description": "Description for Course 14",
    "author": "Author 14",
    "rating": 1,
    "reviews": 6567,
    "duration": "02:43:33",
    "lectures_counter": 44,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "Spanish",
    "price": 87,
    "comments": [
      {
        "name": "Jeanette",
        "comment": "Id reprehenderit aute voluptate quis laboris enim ea voluptate eu ut cillum laboris minim."
      },
      {
        "name": "Constance",
        "comment": "Commodo quis aliqua nulla incididunt labore irure nisi ullamco ex sunt sit."
      },
      {
        "name": "Decker",
        "comment": "Eiusmod consectetur et labore et eu minim amet aliqua excepteur do incididunt id exercitation nulla."
      },
      {
        "name": "Bridgette",
        "comment": "Sunt excepteur exercitation dolore velit."
      }
    ]
  },
  {
    "name": "Course 15",
    "description": "Description for Course 15",
    "author": "Author 15",
    "rating": 5,
    "reviews": 34729,
    "duration": "12:27:57",
    "lectures_counter": 95,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "English",
    "price": 126,
    "comments": [
      {
        "name": "Theresa",
        "comment": "Eu et dolore qui ullamco fugiat dolor enim sit elit eu."
      },
      {
        "name": "Marshall",
        "comment": "Veniam magna aliqua laboris incididunt velit sit minim ipsum consequat."
      }
    ]
  },
  {
    "name": "Course 16",
    "description": "Description for Course 16",
    "author": "Author 16",
    "rating": 1,
    "reviews": 7801,
    "duration": "03:54:54",
    "lectures_counter": 56,
    "difficulty_level": 2,
    "is_best_seller": false,
    "languages": "English",
    "price": 69,
    "comments": [
      {
        "name": "Marietta",
        "comment": "Cillum ullamco qui commodo aliquip officia anim duis proident excepteur qui occaecat."
      },
      {
        "name": "Kramer",
        "comment": "Proident irure consectetur velit tempor qui magna aliqua aliquip excepteur ad voluptate nostrud consequat consequat."
      }
    ]
  },
  {
    "name": "Course 17",
    "description": "Description for Course 17",
    "author": "Author 17",
    "rating": 1,
    "reviews": 30703,
    "duration": "11:16:28",
    "lectures_counter": 8,
    "difficulty_level": 1,
    "is_best_seller": true,
    "languages": "Korean",
    "price": 117,
    "comments": [
      {
        "name": "Linda",
        "comment": "Ut officia veniam fugiat culpa ut ex eu do sint minim sit aliqua."
      },
      {
        "name": "Angelique",
        "comment": "Consequat anim culpa eu irure duis consectetur tempor Lorem Lorem cupidatat tempor officia ex."
      }
    ]
  },
  {
    "name": "Course 18",
    "description": "Description for Course 18",
    "author": "Author 18",
    "rating": 1,
    "reviews": 24603,
    "duration": "01:11:45",
    "lectures_counter": 35,
    "difficulty_level": 1,
    "is_best_seller": true,
    "languages": "Korean",
    "price": 14,
    "comments": [
      {
        "name": "Neva",
        "comment": "Sit laborum incididunt veniam dolor aliqua nisi duis enim."
      },
      {
        "name": "Faulkner",
        "comment": "Labore Lorem nulla est eiusmod irure sunt in incididunt voluptate."
      }
    ]
  },
  {
    "name": "Course 19",
    "description": "Description for Course 19",
    "author": "Author 19",
    "rating": 2,
    "reviews": 93234,
    "duration": "11:25:02",
    "lectures_counter": 89,
    "difficulty_level": 3,
    "is_best_seller": false,
    "languages": "Spanish",
    "price": 154,
    "comments": [
      {
        "name": "Dotson",
        "comment": "Irure sunt amet veniam aute quis elit cupidatat."
      },
      {
        "name": "Bernice",
        "comment": "Culpa mollit est amet velit cillum adipisicing."
      }
    ]
  },
  {
    "name": "Course 20",
    "description": "Description for Course 20",
    "author": "Author 20",
    "rating": 1,
    "reviews": 43614,
    "duration": "08:23:47",
    "lectures_counter": 44,
    "difficulty_level": 3,
    "is_best_seller": false,
    "languages": "English",
    "price": 116,
    "comments": [
      {
        "name": "Stephanie",
        "comment": "Quis voluptate sint velit excepteur enim voluptate Lorem adipisicing."
      },
      {
        "name": "Cecilia",
        "comment": "Dolore cupidatat laborum cupidatat irure fugiat mollit nostrud."
      },
      {
        "name": "Barton",
        "comment": "Culpa non magna et laboris velit laboris."
      }
    ]
  }
]

 module.exports = {
  coursers
 };
