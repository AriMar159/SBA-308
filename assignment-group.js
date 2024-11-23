import { CourseInfo } from './course-info';

export class AssignmentGroup extends CourseInfo {
  constructor(id, name, courseid, group_weight, assignments){
    super(courseid, name);
    this.id = this.validateTypeOrThrow(id, 'number', 'id must be a number');
    this.group_weight = this.validateTypeOrThrow(group_weight, 'number', 'group_weight must be a number');
    this.assignments = assignments;
  }
}