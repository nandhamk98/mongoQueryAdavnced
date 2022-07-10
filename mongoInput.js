// Input data for User Collection:

db.User.insertMany([
  {
    userId: 1,
    name: "Pippa Spowart",
    mentorId: 1,
  },
  {
    userId: 2,
    name: "Henrik Franzolini",
    mentorId: 1,
  },
  {
    userId: 3,
    name: "Virgie Ivain",
    mentorId: 1,
  },
  {
    userId: 4,
    name: "Ardyce Royce",
    mentorId: 1,
  },
  {
    userId: 5,
    name: "Maurita Bakhrushin",
    mentorId: 1,
  },
  {
    userId: 6,
    name: "Fina Totaro",
    mentorId: 1,
  },
  {
    userId: 7,
    name: "Trina Conws",
    mentorId: 1,
  },
  {
    userId: 8,
    name: "Madelene Shovel",
    mentorId: 1,
  },
  {
    userId: 9,
    name: "Josiah Ciotto",
    mentorId: 1,
  },
  {
    userId: 10,
    name: "Merridie Perkinson",
    mentorId: 1,
  },
  {
    userId: 11,
    name: "Frank Tees",
    mentorId: 1,
  },
  {
    userId: 12,
    name: "Evvy Durak",
    mentorId: 1,
  },
  {
    userId: 13,
    name: "Valli Voyce",
    mentorId: 1,
  },
  {
    userId: 14,
    name: "Paulie Oty",
    mentorId: 1,
  },
  {
    userId: 15,
    name: "Kirbie Presnell",
    mentorId: 1,
  },
  {
    userId: 16,
    name: "Tamarra Beeson",
    mentorId: 2,
  },
  {
    userId: 17,
    name: "Elaina Pergens",
    mentorId: 2,
  },
  {
    userId: 18,
    name: "Angy Choudhury",
    mentorId: 2,
  },
  {
    userId: 19,
    name: "Dale Sarsons",
    mentorId: 2,
  },
  {
    userId: 20,
    name: "Meridel McElory",
    mentorId: 2,
  },
  {
    userId: 21,
    name: "Valeria Sanders",
    mentorId: 2,
  },
  {
    userId: 22,
    name: "Marty Bogays",
    mentorId: 2,
  },
  {
    userId: 23,
    name: "Lanna Creyke",
    mentorId: 2,
  },
  {
    userId: 24,
    name: "Susana Keddey",
    mentorId: 2,
  },
  {
    userId: 25,
    name: "Ev Bierton",
    mentorId: 2,
  },
  {
    userId: 26,
    name: "Brunhilde Orgill",
    mentorId: 2,
  },
  {
    userId: 27,
    name: "Ennis Hrishchenko",
    mentorId: 2,
  },
  {
    userId: 28,
    name: "Lena Sulland",
    mentorId: 2,
  },
  {
    userId: 29,
    name: "Tore Galliver",
    mentorId: 2,
  },
  {
    userId: 30,
    name: "Grover Abramamov",
    mentorId: 2,
  },
  {
    userId: 31,
    name: "Freeland Ughini",
    mentorId: 3,
  },
  {
    userId: 32,
    name: "Imojean McIlmurray",
    mentorId: 3,
  },
  {
    userId: 33,
    name: "Melvyn Kullmann",
    mentorId: 3,
  },
  {
    userId: 34,
    name: "Norbie D'Errico",
    mentorId: 3,
  },
  {
    userId: 35,
    name: "Marlee MacGiffin",
    mentorId: 3,
  },
  {
    userId: 36,
    name: "Enrika Messom",
    mentorId: 3,
  },
  {
    userId: 37,
    name: "Wallis Hanalan",
    mentorId: 3,
  },
  {
    userId: 38,
    name: "Lynelle Abendroth",
    mentorId: 3,
  },
  {
    userId: 39,
    name: "Clementius Axelbey",
    mentorId: 3,
  },
  {
    userId: 40,
    name: "Ermengarde Sisey",
    mentorId: 3,
  },
]);

//Input data for mentor
db.Mentor.insertMany([
  {
    mentorName: "Casandra",
    mentorId: 1,
  },
  {
    mentorName: "Ram",
    mentorId: 2,
  },
  {
    mentorName: "Sardar",
    mentorId: 3,
  },
]);

// Input data for Company_drives

db.Company_drives.insertMany([
  {
    companyId: 1,
    companyName: "Samsung",
    driveDate: new Date("2020-06-25"),
    studentsAttended: [1, 2, 3, 4, 5, 6, 8, 9],
  },
  {
    companyId: 2,
    companyName: "Amazon",
    driveDate: new Date("2020-02-25"),
    studentsAttended: [11, 12, 13, 14, 15, 16, 18, 19],
  },
  {
    companyId: 3,
    companyName: "Google",
    driveDate: new Date("2020-04-25"),
    studentsAttended: [21, 22, 23, 24, 25, 26, 28, 29],
  },
  {
    companyId: 4,
    companyName: "Microsoft",
    driveDate: new Date("2020-10-25"),
    studentsAttended: [1, 22, 13, 24, 20, 26, 2, 29],
  },
  {
    companyId: 5,
    companyName: "Apple",
    driveDate: new Date("2020-10-30"),
    studentsAttended: [21, 22, 33, 34, 25, 26, 38, 29],
  },
]);

// Input data for Codekata
db.Codekata.insertMany([
  {
    userId: 1,
    probemSolved: 56,
    points: 247,
    lastSolved: new Date("2021-05-12"),
  },
  {
    userId: 2,
    probemSolved: 32,
    points: 435,
    lastSolved: new Date("2021-06-16"),
  },
  {
    userId: 3,
    probemSolved: 36,
    points: 568,
    lastSolved: new Date("2022-01-19"),
  },
  {
    userId: 4,
    probemSolved: 74,
    points: 436,
    lastSolved: new Date("2022-02-12"),
  },
  {
    userId: 5,
    probemSolved: 71,
    points: 993,
    lastSolved: new Date("2021-03-09"),
  },
  {
    userId: 6,
    probemSolved: 27,
    points: 592,
    lastSolved: new Date("2022-06-17"),
  },
  {
    userId: 7,
    probemSolved: 97,
    points: 814,
    lastSolved: new Date("2020-11-22"),
  },
  {
    userId: 8,
    probemSolved: 59,
    points: 115,
    lastSolved: new Date("2022-04-07"),
  },
  {
    userId: 9,
    probemSolved: 88,
    points: 858,
    lastSolved: new Date("2021-10-07"),
  },
  {
    userId: 10,
    probemSolved: 83,
    points: 304,
    lastSolved: new Date("2021-05-17"),
  },
  {
    userId: 11,
    probemSolved: 69,
    points: 511,
    lastSolved: new Date("2021-03-28"),
  },
  {
    userId: 12,
    probemSolved: 42,
    points: 840,
    lastSolved: new Date("2020-08-23"),
  },
  {
    userId: 13,
    probemSolved: 40,
    points: 653,
    lastSolved: new Date("2020-11-16"),
  },
  {
    userId: 14,
    probemSolved: 39,
    points: 472,
    lastSolved: new Date("2020-11-27"),
  },
  {
    userId: 15,
    probemSolved: 87,
    points: 538,
    lastSolved: new Date("2022-01-08"),
  },
  {
    userId: 16,
    probemSolved: 45,
    points: 686,
    lastSolved: new Date("2021-10-07"),
  },
  {
    userId: 17,
    probemSolved: 38,
    points: 113,
    lastSolved: new Date("2022-01-09"),
  },
  {
    userId: 18,
    probemSolved: 79,
    points: 670,
    lastSolved: new Date("2021-10-04"),
  },
  {
    userId: 19,
    probemSolved: 65,
    points: 761,
    lastSolved: new Date("2020-08-21"),
  },
  {
    userId: 20,
    probemSolved: 33,
    points: 699,
    lastSolved: new Date("2021-07-18"),
  },
  {
    userId: 21,
    probemSolved: 43,
    points: 600,
    lastSolved: new Date("2021-09-19"),
  },
  {
    userId: 22,
    probemSolved: 97,
    points: 616,
    lastSolved: new Date("2020-09-20"),
  },
  {
    userId: 23,
    probemSolved: 43,
    points: 393,
    lastSolved: new Date("2021-12-24"),
  },
  {
    userId: 24,
    probemSolved: 46,
    points: 845,
    lastSolved: new Date("2020-10-27"),
  },
  {
    userId: 25,
    probemSolved: 90,
    points: 595,
    lastSolved: new Date("2021-11-23"),
  },
  {
    userId: 26,
    probemSolved: 27,
    points: 859,
    lastSolved: new Date("2020-10-20"),
  },
  {
    userId: 27,
    probemSolved: 46,
    points: 517,
    lastSolved: new Date("2020-08-21"),
  },
  {
    userId: 28,
    probemSolved: 97,
    points: 403,
    lastSolved: new Date("2021-11-01"),
  },
  {
    userId: 29,
    probemSolved: 83,
    points: 652,
    lastSolved: new Date("2022-01-18"),
  },
  {
    userId: 30,
    probemSolved: 66,
    points: 237,
    lastSolved: new Date("2022-06-07"),
  },
  {
    userId: 31,
    probemSolved: 37,
    points: 483,
    lastSolved: new Date("2021-04-05"),
  },
  {
    userId: 32,
    probemSolved: 35,
    points: 385,
    lastSolved: new Date("2021-03-01"),
  },
  {
    userId: 33,
    probemSolved: 40,
    points: 585,
    lastSolved: new Date("2022-05-06"),
  },
  {
    userId: 34,
    probemSolved: 24,
    points: 512,
    lastSolved: new Date("2021-11-09"),
  },
  {
    userId: 35,
    probemSolved: 83,
    points: 628,
    lastSolved: new Date("2021-03-08"),
  },
  {
    userId: 36,
    probemSolved: 40,
    points: 664,
    lastSolved: new Date("2021-12-10"),
  },
  {
    userId: 37,
    probemSolved: 91,
    points: 213,
    lastSolved: new Date("2020-11-08"),
  },
  {
    userId: 38,
    probemSolved: 48,
    points: 530,
    lastSolved: new Date("2020-10-09"),
  },
  {
    userId: 39,
    probemSolved: 69,
    points: 683,
    lastSolved: new Date("2021-12-12"),
  },
  {
    userId: 40,
    probemSolved: 51,
    points: 242,
    lastSolved: new Date("2021-09-06"),
  },
]);

// Input data for tasks
db.Topics.insertMany([
  {
    topicId: 1,
    topicName: "Basic of HTML",
    classDate: new Date("2020-10-25"),
    taskId: 1,
  },
  {
    topicId: 2,
    topicName: "Basics of CSS",
    classDate: new Date("2020-10-30"),
    taskId: 2,
  },
  {
    topicId: 3,
    topicName: "Basics of JS",
    classDate: new Date("2020-11-01"),
    taskId: 3,
  },
  {
    topicId: 4,
    topicName: "Advanced JS",
    classDate: new Date("2020-11-07"),
    taskId: 4,
  },
]);

// Input data for tasks
db.Tasks.insertMany([
  {
    taskId: 1,
    taskName: "Create HTML Page",
    students_submitted: [1, 2, 3, 4, 5, 6],
    students_Notsubmitted: [7],
  },
  {
    taskId: 2,
    taskName: "Design a HTML Page using css",
    students_submitted: [1, 2, 3, 4, 5, 6],
    students_Notsubmitted: [7],
  },
  {
    taskId: 3,
    taskName: "Solve a JS Problem",
    students_submitted: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    taskId: 4,
    taskName: "Solve a Advanced JS Problem",
    students_submitted: [1, 2, 3, 4, 5, 6, 7],
  },
]);

//Input data for attendance
db.Attendance.insertMany([
  {
    userId: 1,
    present: [
      new Date("2020-10-25"),
      new Date("2020-10-30"),
      new Date("2020-11-01"),
      new Date("2020-11-07"),
    ],
    absent: [],
    half: [],
  },
  {
    userId: 2,
    present: [
      new Date("2020-10-25"),
      new Date("2020-10-30"),
      new Date("2020-11-01"),
      new Date("2020-11-07"),
    ],
    absent: [],
    half: [],
  },
  {
    userId: 3,
    present: [
      new Date("2020-10-25"),
      new Date("2020-10-30"),
      new Date("2020-11-01"),
      new Date("2020-11-07"),
    ],
    absent: [],
    half: [],
  },
  {
    userId: 4,
    present: [
      new Date("2020-10-25"),
      new Date("2020-10-30"),
      new Date("2020-11-01"),
      new Date("2020-11-07"),
    ],
    absent: [],
    half: [],
  },
  {
    userId: 5,
    present: [
      new Date("2020-10-25"),
      new Date("2020-10-30"),
      new Date("2020-11-01"),
      new Date("2020-11-07"),
    ],
    absent: [],
    half: [],
  },
  {
    userId: 6,
    present: [
      new Date("2020-10-25"),
      new Date("2020-10-30"),
      new Date("2020-11-01"),
      new Date("2020-11-07"),
    ],
    absent: [],
    half: [],
  },
  {
    userId: 7,
    present: [new Date("2020-11-01"), new Date("2020-11-07")],
    absent: [new Date("2020-10-25"), new Date("2020-10-30")],
    half: [],
  },
]);
