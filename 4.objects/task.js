function Student(name, gender, age, marks) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks') && this.marks !== []) {
    this.marks.push(...marks);
      } else {
        return 0;
      }
    }

Student.prototype.getAverage = function () {
    if(this.hasOwnProperty('marks') === false || this.marks === []) {
        return 0;
    } else {
        let length = this.marks.length;
        let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
      return sum / length;
    };
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}