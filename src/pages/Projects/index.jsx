import { useLanguageContext } from "../../utils/Context/languageContext";
import Gallery from "../../components/Gallery";
import { ProjectContainer } from "../../styles/projects";
import TextAnimation from "../../components/Animation/text";

function Projects() {
  //Translation
  const { t } = useLanguageContext();
  return (
    <ProjectContainer id="sectionProjects" className="section">
      <TextAnimation title={t("projectsTitle")} />
      <Gallery />
    </ProjectContainer>
  );
}

export default Projects;
