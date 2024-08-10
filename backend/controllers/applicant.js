import Applicant from "../models/ApplicantRequest.js";


export const Apply = async (req, res) => {
  try {
    const newApplicant = new Applicant({
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      jobTitle: req.body.jobTitle,  
      github: req.body.github,
      objective: req.body.objective,
      summary: req.body.summary,
      workExperience: req.body.workExperience,
      education: req.body.education,
      skills: req.body.skills,
      projects: req.body.projects,
      certifications: req.body.certifications,
      references: req.body.references,
      status: req.body.status || "pending",
    });

    await newApplicant.save();
    res.status(200).send({
      message: "Application Sent Successfully",
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Failed to send application",
      success: false,
    });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).json({
      success: true,
      data: applicants,
    });
  } catch (err) {
    console.error("Error fetching applicants:", err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve applicants",
    });
  }
};

// Update applicant status
export const updateApplicantStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const applicant = await Applicant.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!applicant) {
      return res.status(404).json({
        success: false,
        message: 'Applicant not found',
      });
    }

    res.status(200).json({
      success: true,
      data: applicant,
    });
  } catch (err) {
    console.error("Error updating applicant status:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update applicant status",
    });
  }
};
