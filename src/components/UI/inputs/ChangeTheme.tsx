'use client'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { ThemeEnum } from "@/interfaces";
import { useUi } from "@/hooks";

export const ChangeTheme = () => {
  const { theme, handleChangeTheme } = useUi();

  const onChangeTheme = () => {
    handleChangeTheme(
      theme === ThemeEnum.THEME_LIGHT
        ? ThemeEnum.THEME_DARK
        : ThemeEnum.THEME_LIGHT
    );
  }

  return (
    <label className="inline-flex items-center relative">
        <input
            className="peer hidden"
            id="toggle"
            type="checkbox"
            onChange={() => onChangeTheme()}
            checked={theme === ThemeEnum.THEME_LIGHT}/>
        <div
            className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r after:from-orange-500 after:to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
        ></div>
        <IoSunnyOutline className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"/>
        <IoMoonOutline className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white peer-checked:text-white absolute w-6 h-6 right-[13px]"/>
    </label>
  )
}