let aboutInterval;
const renderAbout = () => {
  const fadeDuration = 5000;
  const aboutImg = document.querySelector(".aboutContainer .aboutImage");

  const intervalFunc = () => {
    const imagesArray = Object.keys(iconEnum);
    const imageRandomIndex = Math.floor(Math.random() * imagesArray.length);
    const randomImageUrl = iconEnum[imagesArray[imageRandomIndex]];
    // console.log("imageRandomIndex", imageRandomIndex);
    // console.log("imagesArray[imageRandomIndex]", imagesArray[imageRandomIndex]);
    // console.log(
    //   "iconEnum[imagesArray[imageRandomIndex]]",
    //   iconEnum[imagesArray[imageRandomIndex]]
    // );

    aboutImg.setAttribute("src", `./assets/${randomImageUrl}`);
  };

  intervalFunc();
  aboutInterval = setInterval(intervalFunc, fadeDuration);
  aboutImg.style = `--anim-duration: ${fadeDuration / 1000}s`;
};

const renderSkills = () => {
  const commercialContainer = document.querySelector(".commercialSkills");
  const nocommercialContainer = document.querySelector(".nocommercialSkills");

  const createSkillElement = (skill) => {
    const skillContainer = document.createElement("div");
    skillContainer.classList.add("skillContainer");

    const skillImage = document.createElement("img");
    if (skill.imageUrl !== undefined && skill.imageUrl !== "") {
      skillImage.srcset = "./assets/" + skill.imageUrl;
      skillContainer.append(skillImage);
    }

    const labelsContainer = document.createElement("div");
    labelsContainer.classList.add("skillsLabelContainer");

    const skillLabel = document.createElement("h5");
    if (skill.title !== undefined) {
      skillLabel.textContent = skill.title;
      labelsContainer.append(skillLabel);
    } else if (skill.titleKey !== undefined) {
      skillLabel.dataset.langKey = skill.titleKey;
      labelsContainer.append(skillLabel);
    }

    const skillLvlLabel = document.createElement("h6");
    if (skill.lvl !== undefined) {
      skillLvlLabel.dataset.langKey = `SKILL_LVL_${skill.lvl}`;
      labelsContainer.append(skillLvlLabel);
    }

    skillContainer.append(labelsContainer);
    return skillContainer;
  };

  commercialContainer.append(...skillsData.COMMERCIAL.map(createSkillElement));

  nocommercialContainer.append(
    ...skillsData.NO_COMMERCIAL.map(createSkillElement)
  );
};

const renderWork = () => {
  const workSection = document.querySelector("section#experience");
  const workDataElements = workData.map((wd) => {
    const workContainer = document.createElement("article");
    workContainer.classList.add("experienceContainer");
    const workEmployer = document.createElement("h3");
    workEmployer.textContent = wd.employer;
    workEmployer.className = "workEmployer";
    const workDate = document.createElement("h3");
    workDate.textContent = `${wd.startDate} - ${wd.endDate}`;
    workDate.className = "workDate";
    const workTitle = document.createElement("h3");
    workTitle.textContent = wd.workTitle;
    workTitle.className = "workTitle";
    const workProjects = document.createElement("h3");
    workProjects.dataset.langKey = "EXPERIENCE_PROJECTS";
    workProjects.className = "workProjects";

    const projectsContainer = document.createElement("div");
    projectsContainer.classList.add("projectsContainer");
    workContainer.append(
      workEmployer,
      workDate,
      workTitle,
      workProjects,
      projectsContainer
    );

    const projects = wd.projects.map((project) => {
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("projectInfoContainer");

      const projectName = document.createElement("h4");
      projectName.textContent = project.projectName;
      const projectTime = document.createElement("h4");
      projectTime.textContent = project.projectTime;
      const projectDescription = document.createElement("p");
      projectDescription.dataset.langKey = `EXPERIENCE_${wd.wokrKey}_${project.projectKey}_DESCRIPTION`;
      const projectResponsibilityTitle = document.createElement("h4");
      projectResponsibilityTitle.dataset.langKey =
        "EXPERIENCE_RESPONSIBILITY_TITLE";
      const projectResponsibility = document.createElement("p");
      projectResponsibility.dataset.langKey = `EXPERIENCE_${wd.wokrKey}_${project.projectKey}_RESPONSIBILITY`;
      const projectTechnologiesTitle = document.createElement("h4");
      projectTechnologiesTitle.dataset.langKey =
        "EXPERIENCE_TECHNOLOGIES_TITLE";
      const projectTechnologies = document.createElement("p");
      projectTechnologies.textContent = project.projectTechnologies;

      projectContainer.append(
        projectName,
        projectTime,
        projectDescription,
        projectResponsibilityTitle,
        projectResponsibility,
        projectTechnologiesTitle,
        projectTechnologies
      );
      return projectContainer;
    });

    projectsContainer.append(...projects);
    return workContainer;
  });

  workSection.append(...workDataElements);
};

const renderEducation = () => {
  const educationsContainer = document.querySelector("#education");

  const educations = educationData.map((edu) => {
    const educationContainer = document.createElement("artice");
    educationContainer.classList.add("educationContainer");

    const schoolNameLabel = document.createElement("h3");
    schoolNameLabel.textContent = edu.name;
    schoolNameLabel.className = "schoolName";
    const schoolTimeLabel = document.createElement("h4");
    schoolTimeLabel.textContent = edu.time;
    schoolTimeLabel.className = "schoolTime";

    const schoolSpecializationContainer = document.createElement("h4");
    const schoolSpecializationLabel = document.createElement("span");
    schoolSpecializationLabel.dataset.langKey = "SPECIALIZATION";
    const schoolSpecializationData = document.createElement("span");
    schoolSpecializationData.dataset.langKey = `${edu.specializationKey}`;
    schoolSpecializationContainer.append(
      schoolSpecializationLabel,
      schoolSpecializationData
    );

    const schoolEducationLevelContainer = document.createElement("h4");
    const schoolEducationLevelLabel = document.createElement("span");
    schoolEducationLevelLabel.dataset.langKey = "EDUCATION_LEVEL";
    const schoolEducationLevelData = document.createElement("span");
    schoolEducationLevelData.dataset.langKey = `${edu.educationLevelKey}`;
    schoolEducationLevelContainer.append(
      schoolEducationLevelLabel,
      schoolEducationLevelData
    );

    educationContainer.append(
      schoolNameLabel,
      schoolTimeLabel,
      schoolSpecializationContainer,
      schoolEducationLevelContainer
    );
    return educationContainer;
  });

  educationsContainer.append(...educations);

  // SPECIALIZATION: "Specialization: ",
  // SPECIALIZATION_IT_TECH: "IT Technician",
  // SPECIALIZATION_IT: "IT",
  // EDUCATION_LEVEL: "Degrees: ",
  // EDUCATION_LEVEL_MASTER: "Master of Science",
  // EDUCATION_LEVEL_TECHNICIAN: "Technician",
};

{
  /* <article>
<h3>Technikum Elektryczne</h3>
<h4>09.2013 - 04.2017</h4>
<h4>Specjalizacja: Technik Informatyk</h4>
<h4>Poziom wykształcenia: Średnie</h4>
</article> */
}

const renderCourses = () => {
  const courses = document.querySelector("#courses");
  const coursesContainer = document.createElement("div");
  coursesContainer.classList.add("coursesContainer");

  const coursesElements = coursesData.map((course) => {
    const courseContainer = document.createElement("article");
    courseContainer.className = "courseContainer";

    const courseTitle = document.createElement("h4");
    courseTitle.className = "courseTitle";
    courseTitle.textContent = course.courseTitle;

    const courseCreator = document.createElement("h6");
    courseCreator.className = "courseCreator";
    courseCreator.textContent = course.courseCreator;
    const courseTime = document.createElement("h6");
    courseTime.className = "courseTime";
    courseTime.textContent = course.courseTime;
    const iconContainer = document.createElement("div");
    iconContainer.className = "courseIconContainer";

    course.skillsIconUrl.forEach((url) => {
      const skillImage = document.createElement("img");
      if (url !== undefined && url !== "") {
        skillImage.srcset = "./assets/" + url;
        iconContainer.append(skillImage);
      }
    });

    courseContainer.append(
      courseTitle,
      courseCreator,
      courseTime,
      iconContainer
    );

    return courseContainer;
  });

  coursesContainer.append(...coursesElements.reverse());
  courses.append(coursesContainer);
};

const renderInterests = () => {
  const interests = document.querySelector("#interests");
  const interestsContainer = document.createElement("article");
  interestsContainer.className = "interestsContainer";

  const interestsElements = interestsData.map((interest) => {
    const interestContainer = document.createElement("div");
    interestContainer.className = "interestContainer";
    interestContainer.addEventListener("click", () => {
      displayModal(interest.nameKey + "_DETAILS");
    });

    const interestTitle = document.createElement("h4");
    interestTitle.dataset.langKey = interest.nameKey;
    const interestIcon = document.createElement("i");
    interestIcon.className = interest.iconClass;
    // const interestDetails = document.createElement("p");
    // interestDetails.className = "interestsDetails";
    // interestDetails.dataset.langKey = interest.nameKey + "_DETAILS";

    // interestContainer.append(interestTitle, interestIcon, interestDetails);
    interestContainer.append(interestTitle, interestIcon);

    return interestContainer;
  });

  interestsContainer.append(...interestsElements);
  interests.append(interestsContainer);
};

const displayModal = (key) => {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal";
  const modalContentContainer = document.createElement("div");
  modalContentContainer.className = "modalContentContainer";
  const modalContent = document.createElement("h3");
  modalContent.className = "modalContent";

  modalContent.dataset.langKey = key;
  modalContent.innerHTML = getTranslation(key);

  modalContentContainer.append(modalContent);
  modalContainer.append(modalContentContainer);
  modalContainer.addEventListener("click", () => {
    closeModal();
  });

  document.body.append(modalContainer);
};

const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal.remove();
};

renderAbout();
renderSkills();
renderWork();
renderEducation();
renderCourses();
renderInterests();

translateText(currentLanguage);
