import { CourseInfo } from './course-info.js';

export class AssignmentInfo extends CourseInfo {
  constructor(id, name, due_at, points){
    super(id, name);
    this.due_at = this.validateduedate(due_at);
    this.points_possible = this.checkforzeromax(points);
  }

  validateduedate(due_at){
    try {
      return new Date(due_at);
    } catch (error) {
      throw new Error('due_at must be a date string');
    }
  }
  
  checkforzeromax(points){
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
  checkiflate(submitted_at){
    return submitted_at > this.due_at;
  }

  deductPoints(pointsearned, duedate, submittedat) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((submittedat - duedate) / oneDay));
    if (diffDays <= 0) {
      return pointsearned;
    }

    const totalpoints = pointsearned - (diffDays * this.points_possible * .1);
    return (totalpoints > 0) ? totalpoints : 0;
  }
}