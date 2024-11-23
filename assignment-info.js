import { CourseInfo } from './course-info';

export class AssignmentInfo extends CourseInfo {
  constructor(id, name, due_at, points){
    super(id, name);
    this.due_at = due_at.toISOString();
    this.points_possible = this.checkforzeromax(points);
  }

  function checkforzeromax(points){
    try {
      const score = this.validateTypeOrThrow(points, 'number', 'points_possible must be a number');

      if (score < 1){
        throw new Error('points_possible must be greater than 0');
      }
      return score;
    } catch (error) {
      throw error;
    }
  }
}