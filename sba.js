import { CourseInfo } from './course-info.js';
import { AssignmentGroup } from './assignment-group.js';
import { LearnerSubmission } from './learner-submission.js';

function addSubmissionRecord(learnerId, score, assignmentId, learnerObject){
  if (!learnerObject.id){ 
    learnerObject[assignmentId] = score; 
    learnerObject.avg = score;
    learnerObject[id] = learnerId;

    return learnerObject;
  }
  learnerObject[assignmentId] = score; 
  learnerObject.avg = (learnerObject.avg + score)/2;
  return learnerObject;
}

function findObjectById(id, array){
  for (let result of array) {
    if (result.id === id) {
      return result;
    }
  }
  return {id: id, avg: 0};
}

export function getLearnerData(courseinfo, assignmentgroup, learnersubmission){
  // assumption is that parameters are maps
  let coursedata = new CourseInfo(courseinfo.id, courseinfo.name);
  let assignmentdata = new AssignmentGroup(assignmentgroup.id, assignmentgroup.name, assignmentgroup.course_id, assignmentgroup.group_weight, assignmentgroup.assignments);
  let submissiondata = [];
  let results = [];
  for (let submission of learnersubmission) {
    submissiondata.push(new LearnerSubmission(submission.learner_id, submission.assignment_id, submission.submission));
  }
  assignmentdata.checkifmatchingcourseid(coursedata.id);

  for (let index = 0; index < submissiondata.length; index++){
    let submission = submissiondata[index];
    let submission_points = submission.getscore();
    const assignment = assignmentdata.getassignmentbyid(submission.assignment_id);
    const submission_duedate = assignment.due_at;
    const submission_submittedat = submission.submission.submitted_at;
    //const submission_late = assignment.checkiflate(submission_submittedat); broken
    const submission_points_earned = assignment.deductPoints(submission_points, submission_duedate, submission_submittedat);
    const submission_points_possible = assignment.points_possible;
    const percentScore = submission_points_earned / submission_points_possible;
    results.push(addSubmissionRecord(submission.learner_id, percentScore, submission.assignment_id, findObjectById(submission.learner_id, results)));
  }

  return results;
}

