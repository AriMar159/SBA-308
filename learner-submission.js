class Submission{
  constructor(submitted_at,score){
    this.submitted_at = this.validateTypeOrThrow(submitted_at, 'Date', 'submitted_at must be a date');
    this.score = this.validateTypeOrThrow(score, 'number', 'score must be a number');
  }
  
  function validateTypeOrThrow(value, type, errorMessage){
    if (typeof(value) === type){
      return value;
    } else {
      throw new Error(errorMessage);
    }
  }
}

export class LearnerSubmission {
  constructor (learner_id, assignment_id, submission){
    this.id = this.validateTypeOrThrow(id, 'number', 'id must be a number');
    this.name = this.validateTypeOrThrow(name, 'string', 'name must be a string');
  }

  function validateTypeOrThrow(value, type, errorMessage){
    if (typeof(value) === type){
      return value;
    } else {
      throw new Error(errorMessage);
    }
  }

  function validatesubmission(value, errormessage) {
   if (value instanceof Submission){
     return value;
   } else {
     throw new Error(errormessage);
   }
  }
}