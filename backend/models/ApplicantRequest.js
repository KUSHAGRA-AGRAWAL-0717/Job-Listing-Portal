import mongoose from "mongoose";

const ApplicantSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    jobTitle: {  
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
    objective: {
      type: String,
    },
    summary: {
      type: String,
      required: true,
    },
    workExperience: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    skills: {
      type: String,
      required: true,
    },
    projects: {
      type: String,
      required: true,
    },
    certifications: {
      type: String,
    },
    references: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "accepted", "rejected"],
      default: "pending",
    }
  },
  { timestamps: true }
);

export default mongoose.model("Applicant", ApplicantSchema);
