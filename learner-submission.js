class Submission{
  constructor(submitted_at,score){
    this.submitted_at = this.validatesubmissiondate(submitted_at);
    this.score = this.validateTypeOrThrow(score, 'number', 'score must be a number');
  }
  
  validateTypeOrThrow(value, type, errorMessage){
    if (typeof(value) === type && value >= 0){
      return value;
    } else {
      console.log(typeof(value), value);
      throw new Error(errorMessage);
    }
  }

  getscore(){
     return this.score;
   }
  
  validatesubmissiondate(submitted_at){
    try {
      return new Date(submitted_at);
    } catch (error) {
      throw new Error('due_at must be a date string');
    }
  }
}

export class LearnerSubmission {
  constructor (learner_id, assignment_id, submission){
    this.learner_id = this.validateTypeOrThrow(learner_id, 'number', 'learner_id must be a number');
    this.assignment_id = this.validateTypeOrThrow(assignment_id, 'number', 'assignment_id must be a number');
    this.submission = this.validatesubmission(submission, 'submission must contain submitted_at and score');
  }

  validateTypeOrThrow(value, type, errorMessage){
    if (typeof(value) === type){
      return value;
    } else {
      throw new Error(errorMessage);
    }
  }

  getscore(){
     return this.submission.getscore();
   }
  
  validatesubmission(value, errormessage) {
   if (value.submitted_at && value.score){
     return new Submission(value.submitted_at, value.score);
   } else {
     throw new Error(errormessage);
   }
  }
}