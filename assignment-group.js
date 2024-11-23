import { CourseInfo } from './course-info.js';
import { AssignmentInfo } from './assignment-info.js';

export class AssignmentGroup extends CourseInfo {
  constructor(id, name, course_id, group_weight, assignments){
    super(id, name);
    this.course_id = this.validateTypeOrThrow(course_id, 'number', 'course_id must be a number');
    this.group_weight = this.validateTypeOrThrow(group_weight, 'number', 'group_weight must be a number');
    this.assignments = this.validateassignmentinfo(assignments, 'assignments must be an array of AssignmentInfo objects');
  }

  validateassignmentinfo(value, errormessage) {
   if (value[0].points_possible && value[0].due_at){
     let assignments = [];
     for (const assignment of value){
       assignments.push(new AssignmentInfo(assignment.id, assignment.name, assignment.due_at, assignment.points_possible));
     }
     return assignments;
   } else {
     throw new Error(errormessage);
   }
  }

  getassignmentbyid(id){
    let foundassignment = null;
    let index = 0;
    while (index < this.assignments.length)
      {
        if (this.assignments[index].id === id){
          foundassignment = this.assignments[index];
          break;
        }
        index++;
      } 
    return foundassignment;
  }

  checkifmatchingcourseid(unverifiedid) {
    if (unverifiedid !== this.course_id) {
      throw new Error('assignment\'s course id does not match courseinfo id');
    }
  }
}