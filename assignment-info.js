import { CourseInfo } from './course-info';

export class AssignmentInfo extends CourseInfo {
  constructor(id, name, due_at, points){
    super(id, name);
    this.due_at = due_at.toISOString();
    this.points_possible = this.validateTypeOrThrow(points, 'number', 'points_possible must be a number');;
  }
}