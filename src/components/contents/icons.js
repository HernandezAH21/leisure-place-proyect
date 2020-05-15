import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faDragon,
    faTty,
    faEnvelopeOpenText,
    faStreetView,
    faUserNinja,
    faUnlockAlt,
    faHandPointRight,
    faGlobeAmericas,
    faUser,
    faHandPointDown,
    faSmileWink,
    faTools,
    faShareAlt,
    faCheckSquare,
    faGrinWink
    
  } from "@fortawesome/free-solid-svg-icons";

  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, 
      faDragon, faTty, faEnvelopeOpenText, faStreetView, 
      faUserNinja, faUnlockAlt, faHandPointRight, faGlobeAmericas, 
      faUser, faHandPointDown, faSmileWink, faTools, faShareAlt,
      faCheckSquare, faGrinWink
      
    );
  };
  
  export default Icons;