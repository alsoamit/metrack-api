import CourseModel from "../models/course-model";

class CourseService {
  async findCourse(filter) {
    console.log(filter);
    try {
      const course = await CourseModel.findOne(filter);
      return course;
    } catch (err) {
      return err;
    }
  }

  async getAllCourses(filter) {
    console.log(filter, "from get all courses");
    const courses = await CourseModel.find(filter).limit(100).sort("date");
    console.log({ courses });
    return courses;
  }

  async createCourse(data) {
    const course = await CourseModel.create(data);
    return course;
  }

  async deleteCourse(id) {
    const course = await CourseModel.findByIdAndDelete(id);
    return course;
  }

  async updateCourse(id, data) {
    return await CourseModel.findByIdAndUpdate(id, data, { new: true });
  }
}

export default new CourseService();
