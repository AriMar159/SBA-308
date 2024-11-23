export function getLearnerData(courseinfo, assignmentgroup, learnersubmission){
  // assumption is that parameters are maps
  let coursedata = new CourseInfo({...courseinfo});
  let assignmentdata = new AssignmentGroup({ ...assignmentgroup });
  let submissiondata = []; 
  for (let submission of learnersubmission) {
    submissiondata.push(new LearnerSubmission({...submission}));
  }
}

