import Experience from './experience/experience'
import Language from './language'

type State = {
    userPhoto: string,
    workExperience: Experience[],
    currentLanguage: Language,
    selectedTheme: string
}

export default State