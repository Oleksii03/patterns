// class SimpleMembershop {
//   constructor(name) {
//     this.name = name;
//     this.cost = 50;
//   }
// }
// class StandartMembershop {
//   constructor(name) {
//     this.name = name;
//     this.cost = 150;
//   }
// }
// class PremiumMembershop {
//   constructor(name) {
//     this.name = name;
//     this.cost = 500;
//   }
// }

// class MemberFactory {
//   static list = {
//     simple: SimpleMembershop,
//     standart: StandartMembershop,
//     premium: PremiumMembershop,
//   };

//   create(name, type = 'simple') {
//     const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
//     const member = new Membership(name);
//     member.type = type;
//     member.define = function () {
//       console.log(`${this.type} ${this.name} ${this.cost}`);
//     };
//     return member;
//   }
// }

// const factory = new MemberFactory();

// const members = [
//   factory.create('John', 'simple'),
//   factory.create('Doe', 'premium'),
//   factory.create('Bob', 'standart'),
// ];

// members.forEach(member => member.define());

// ---------------------------------------------------

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let count = 0;

// function binarySearch(array, item) {
//   let low = 0;
//   let high = array.length;
//   let mid;
//   let found = false;
//   let position = -1;

//   while (low <= high && !found) {
//     count += 1;
//     mid = Math.floor((low + high) / 2);

//     if (array[mid] === item) {
//       found = true;
//       position = mid;
//       return position;
//     }

//     if (array[mid] < item) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return position;
// }

// console.log(binarySearch(array, 7), `step = ${count}`);

// ------------------------------------------------

// const users = [
//   {
//     id: 1,
//     name: 'Святослав',
//     age: 25,
//     email: 'svyatoslav@example.com',
//     city: 'Київ',
//     friends: [2, 3, 4],
//   },
//   {
//     id: 2,
//     name: 'Злата',
//     age: 32,
//     email: 'vlada@example.com',
//     city: 'Київ',
//     friends: [1, 5, 6, 8],
//   },
//   {
//     id: 3,
//     name: 'Дима',
//     age: 28,
//     email: 'dima@example.com',
//     city: 'Київ',
//     friends: [],
//   },
//   {
//     id: 4,
//     name: 'Алексей',
//     age: 35,
//     email: 'maxim@example.com',
//     city: 'Харків',
//     friends: [1, 2, 3, 4, 5, 6],
//   },
//   {
//     id: 5,
//     name: 'Сергей',
//     age: 29,
//     email: 'vlad@example.com',
//     city: 'Харків',
//     friends: [2, 3, 4],
//   },
//   {
//     id: 6,
//     name: 'Артём',
//     age: 41,
//     email: 'artem@example.com',
//     city: 'Харків',
//     friends: [2, 3, 4, 5],
//   },
//   {
//     id: 7,
//     name: 'Андрей',
//     age: 36,
//     email: 'andrey@example.com',
//     city: 'Херсон',
//     friends: [2, 3, 4, 5, 7],
//   },
//   {
//     id: 8,
//     name: 'Родион',
//     age: 45,
//     email: 'denis@example.com',
//     city: 'Херсон',
//     friends: [],
//   },
//   {
//     id: 9,
//     name: 'Іван',
//     age: 27,
//     email: 'ivan@example.com',
//     city: 'Херсон',
//     friends: [],
//   },
//   {
//     id: 10,
//     name: 'Марія',
//     age: 31,
//     email: 'maria@example.com',
//     city: 'Рівне',
//     friends: [],
//   },
// ];

// const newUsers = users.reduce((acc, user, i, arr) => {
//   const noFriends = arr.filter(us => !us.friends.length);
//   // --------var 2---------------------
//   // const randomUser = noFriends[Math.round(Math.random() * noFriends.length)];

//   // if (user.friends.length && randomUser) {
//   //   if (!user.friends.includes(randomUser.id)) {
//   //     const newUser = { ...user, friends: [...user.friends, randomUser.id] };
//   //     acc.push(newUser);
//   //   }
//   // }
//   // --------var 1---------------------
//   const hasFriends = arr.filter(us => us.friends.length);
//   const randomrWithoutFriends = noFriends[Math.round(Math.random() * noFriends.length)];
//   const randomrFromFriends = hasFriends[Math.round(Math.random() * hasFriends.length)];

//   if (randomrWithoutFriends && randomrFromFriends) {
//     console.log();
//     const newUser = {
//       ...randomrWithoutFriends,
//       friends: [...randomrWithoutFriends.friends, randomrFromFriends.id],
//     };

//     acc.push(newUser);
//   }

//   return acc;
// }, []);

// console.log(newUsers);
// console.log(users);

// const users = [
//   {
//     id: 1,
//     name: 'Святослав',
//     age: 25,
//     email: 'svyatoslav@example.com',
//     city: 'Київ',
//     friends: [2, 3, 4],
//   },
//   {
//     id: 2,
//     name: 'Злата',
//     age: 32,
//     email: 'vlada@example.com',
//     city: 'Київ',
//     friends: [1, 5, 6, 8],
//   },
//   {
//     id: 3,
//     name: 'Дима',
//     age: 28,
//     email: 'dima@example.com',
//     city: 'Київ',
//     friends: [],
//   },
//   {
//     id: 4,
//     name: 'Алексей',
//     age: 35,
//     email: 'maxim@example.com',
//     city: 'Харків',
//     friends: [1, 2, 3, 4, 1, 5, 6],
//   },
//   {
//     id: 5,
//     name: 'Сергей',
//     age: 29,
//     email: 'vlad@example.com',
//     city: 'Харків',
//     friends: [2, 3, 4],
//   },
//   {
//     id: 6,
//     name: 'Артём',
//     age: 41,
//     email: 'artem@example.com',
//     city: 'Харків',
//     friends: [2, 3, 4, 5],
//   },
//   {
//     id: 7,
//     name: 'Андрей',
//     age: 36,
//     email: 'andrey@example.com',
//     city: 'Херсон',
//     friends: [2, 3, 4, 5, 7],
//   },
//   {
//     id: 8,
//     name: 'Родион',
//     age: 45,
//     email: 'denis@example.com',
//     city: 'Херсон',
//     friends: [],
//   },
//   {
//     id: 9,
//     name: 'Іван',
//     age: 27,
//     email: 'ivan@example.com',
//     city: 'Херсон',
//     friends: [],
//   },
//   {
//     id: 10,
//     name: 'Марія',
//     age: 31,
//     email: 'maria@example.com',
//     city: 'Рівне',
//     friends: [],
//   },
// ];

// const x = users.reduce((acc, el, i, arr) => {
//   const e = new Set(el.friends);

//   el.friends = [...e];
//   return users;
// }, users);

// console.log(x);
