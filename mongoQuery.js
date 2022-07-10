//1)Find all the topics and tasks which are thought in the month of October
db.Topics.aggregate([
  {
    $lookup: {
      from: "Tasks",
      localField: "taskId",
      foreignField: "taskId",
      as: "assignments",
    },
  },
  {
    $match: {
      $expr: { $eq: [{ $month: "$classDate" }, 10] },
    },
  },
  {
    $project: {
      topicId: 1,
      topicName: 1,
      "assignments.taskName": 1,
      _id: 0,
    },
  },
]);

// 2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.Company_drives.find({
  driveDate: { $gte: new Date("2020-10-15"), $lte: new Date("2020-10-31") },
});

// 3)Find all the company drives and students who are appeared for the placement.
db.Company_drives.aggregate([
  {
    $lookup: {
      from: "User",
      localField: "studentsAttended",
      foreignField: "userId",
      as: "driveAttendedStudents",
    },
  },
  {
    $project: {
      driveDate: 0,
      studentsAttended: 0,
      "driveAttendedStudents.mentorId": 0,
      "driveAttendedStudents._id": 0,
      _id: 0,
    },
  },
]).pretty();

// 4)Find the number of problems solved by the user in codekata

db.Codekata.aggregate([
  {
    $lookup: {
      from: "User",
      localField: "userId",
      foreignField: "userId",
      as: "StudentDetails",
    },
  },
  {
    $project: {
      _id: 0,
      lastSolved: 0,
      "StudentDetails._id": 0,
      "StudentDetails.userId": 0,
    },
  },
]).pretty();

// 5)Find all the mentors with who has the mentee's count more than 15

db.Mentor.aggregate([
  {
    $lookup: {
      from: "User",
      localField: "mentorId",
      foreignField: "mentorId",
      as: "menteesList",
    },
  },
  {
    $match: {
      $expr: {
        $gte: [{ $size: "$menteesList" }, 15],
      },
    },
  },
  {
    $project: {
      mentorName: 1,
      mentorId: 1,
      count: {
        $function: {
          body: "function (list){ return list.length}",
          args: ["$menteesList"],
          lang: "js",
        },
      },
    },
  },
]).pretty();

// 6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.Tasks.aggregate([
  {
    $lookup: {
      from: "Attendance",
      localField: "students_Notsubmitted",
      foreignField: "userId",
      as: "Students",
    },
  },
  {
    $match: { students_Notsubmitted: { $exists: true } },
  },
  {
    $match: {
      $expr: {
        $filter: {
          input: "$Students.absent",
          as: "date",
          cond: {
            $and: [
              { $gte: ["$$date", new Date("2020-10-15")] },
              { $lte: ["$$date", new Date("2020-10-31")] },
            ],
          },
        },
      },
    },
  },
  {
    $lookup: {
      from: "User",
      localField: "Students.userId",
      foreignField: "userId",
      as: "AbsentStudents",
    },
  },
  {
    $project: {
      "AbsentStudents.userId": 1,
      "AbsentStudents.name": 1,
      _id: 0,
    },
  },
]).pretty();
