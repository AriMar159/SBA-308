import { CourseInfo } from './course-info.js';
import { AssignmentInfo } from './assignment-info.js';

export class AssignmentGroup extends CourseInfo {
  constructor(id, name, course_id, group_weight, assignments){
    super(id, name);
    this.course_id = this.validateTypeOrThrow(course_id, 'number', 'course_id must be a number');
    this.group_weight = this.validateTypeOrThrow(group_weight, 'number', 'group_weight must be a number');
    this.assignments = assignments;
  }

  validatesubmission(value, errormessage) {
   if (typeof(value) === 'Array' && value[0] instanceof AssignmentInfo){
     return value;
   } else {
     throw new Error(errormessage);
   }
  }

  checkifmatchingcourseid(unverifiedid) {
    if (unverifiedid === this.course_id) {return true;}
    else{
      throw new Error('unverifiedid does not match course_id');
    }
  }
}