export namespace Subjects {
  export class Subject {
    teacher?: Subjects.Teacher;
    setTeacher(t: Subjects.Teacher): void {
      this.teacher = t;
    }
  }
}
