export class CourseInfo {
  constructor (id, name){
    this.id = this.validateTypeOrThrow(id, 'number', 'id must be a number');
    this.name = this.validateTypeOrThrow(name, 'string', 'name must be a string');
  }

  validateTypeOrThrow(value, type, errorMessage){
    if (typeof(value) === type){
      return value;
    } else {
      console.log(typeof(value), value)
      throw new Error(errorMessage);
    }
  }
}