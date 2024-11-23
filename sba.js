import { CourseInfo } from './course-info.js';
import { AssignmentGroup } from './assignment-group.js';
import { LearnerSubmission } from './learner-submission.js';

export function getLearnerData(courseinfo, assignmentgroup, learnersubmission){
  // assumption is that parameters are maps
  let coursedata = new CourseInfo(courseinfo.id, courseinfo.name);
  let assignmentdata = new AssignmentGroup(assignmentgroup.id, assignmentgroup.name, assignmentgroup.course_id, assignmentgroup.group_weight, assignmentgroup.assignments);
  let submissiondata = []; 
  for (let submission of learnersubmission) {
    submissiondata.push(new LearnerSubmission(submission.learner_id, submission.assignment_id, submission.submission));
  }
}

