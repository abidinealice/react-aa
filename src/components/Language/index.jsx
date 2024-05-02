import { AppbarBtn } from "../../styles/header";

import { useLanguageContext } from "../../utils/Context/languageContext";

function Language() {
  const { onClickLanguageChange } = useLanguageContext();

  return (
    <div>
      <AppbarBtn value="fr" onClick={onClickLanguageChange}>
        FRA
      </AppbarBtn>
    </div>
  );
}

export default Language;
