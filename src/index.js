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
//   let start = 0;
//   let end = array.length;
//   let middle;
//   let found = false;
//   let position = -1;

//   while (start <= end && !found) {
//     count += 1;
//     middle = Math.floor((start + end) / 2);

//     if (array[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }

//     if (array[middle] < item) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }

//   return position;
// }

// console.log(binarySearch(array, 7), `step = ${count}`);
