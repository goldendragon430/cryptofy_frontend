import i18next from "i18next";
 
const LanguageSelect = () => {
  const selected = localStorage.getItem("i18nextLng") || "en";


  const onChangeLanguage = (e)=>{
    const lan = e.target.value
    i18next.changeLanguage(lan)
  }
  return (
    <div className="flex justify-content items-center language-select-root">
        <select
              name="time"
             
              className="rounded-md border-[1px] border-gray-900 p-2 text-lg"
              onChange = {onChangeLanguage}
        >
          
                  <option value = 'en' selected = {selected == 'en'} >English</option>
                  <option value = 'fr' selected = {selected == 'fr'}>Français</option>
                  <option value = 'gr' selected = {selected == 'gr'}>Deutsch</option>
         
               
        </select>
    </div>
  );
};

export default LanguageSelect;
