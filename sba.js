function getLearnerData(courseinfo, assignmentgroup, learnersubmission){
  // assumption is that parameters are maps
  let coursedata = new CourseInfo({...courseinfo});
  let assignmentdata = new AssignmentGroup({ ...assignmentgroup });
  let submissiondata = new LearnerSubmission({ ...learnersubmission });
  
}
