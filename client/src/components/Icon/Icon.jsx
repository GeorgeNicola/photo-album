import { ReactComponent as DesignIcon } from "../../assets/icons/icon-design.svg";
import { ReactComponent as ElementsIcon } from "../../assets/icons/icon-elements.svg";
import { ReactComponent as UploadsIcon } from "../../assets/icons/icon-other.svg";
import { ReactComponent as TextIcon } from "../../assets/icons/icon-projects.svg";
import { ReactComponent as ProjectsIcon } from "../../assets/icons/icon-text.svg";
import { ReactComponent as OtherIcon } from "../../assets/icons/icon-uploads.svg";

import iconName from "../../constants/iconName";


export default function Icon({icon}){ 
    if(icon == iconName.design) return( <DesignIcon/> );
    if(icon == iconName.elements) return( <ElementsIcon/> );
    if(icon == iconName.uploads) return( <UploadsIcon/> );
    if(icon == iconName.text) return( <TextIcon/> );
    if(icon == iconName.projects) return( <ProjectsIcon/> );
    if(icon == iconName.other) return( <OtherIcon/> );
}


