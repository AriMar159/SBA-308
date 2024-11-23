import { CourseInfo } from './course-info';
import { AssignmentInfo } from './assignment-info';

export class AssignmentGroup extends CourseInfo {
  constructor(id, name, courseid, group_weight, assignments){
    super(courseid, name);
    this.id = this.validateTypeOrThrow(id, 'number', 'id must be a number');
    this.group_weight = this.validateTypeOrThrow(group_weight, 'number', 'group_weight must be a number');
    this.assignments = assignments;
  }

    function validatesubmission(value, errormessage) {
     if (typeof(value) === 'Array' && value[0] instanceof AssignmentInfo){
       return value;
     } else {
       throw new Error(errormessage);
     }
}