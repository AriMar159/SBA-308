function  getLearnerData(CourseInfo,AssignmentGroup,[LearnerSubmission]) {
  try {
    
   if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error(`Assignment Group  ${assignmnetGroup.id} does not belong to course ${courseInfo.id}`);    
    }
  } catch (error) {
    console.log(error.message);
  }
}

  
