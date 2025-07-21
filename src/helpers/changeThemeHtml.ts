import { ThemeEnum } from "@/interfaces";

/**
 * Permite cambiar el tema de la Infografía
 * @param layoutTrigger nombre del tema que se desea guardar
 */
export const changeThemeHtml = (layoutTrigger: ThemeEnum) =>{
    const htmlTag = document.querySelector('html');

    console.log('htmlTag', htmlTag);
    
    if(htmlTag){
        if(layoutTrigger === ThemeEnum.THEME_DARK) {
            htmlTag.classList.remove(ThemeEnum.THEME_DARK)
            htmlTag.classList.add(ThemeEnum.THEME_LIGHT)
        }else {
            htmlTag.classList.remove(ThemeEnum.THEME_LIGHT)
            htmlTag.classList.add(ThemeEnum.THEME_DARK)
        }
    }
}