'use client'
import { useEffect } from "react";
import { ThemeEnum } from "@/interfaces";
import { useUi } from "@/hooks";

interface Props {
    children: React.ReactNode;
}

export const ClientLayout = ({ children }: Props) => {
  const { theme, handleChangeTheme } = useUi();

  useEffect(() => {
      const theme = localStorage.getItem("theme");

        if (theme) {
            handleChangeTheme(theme as ThemeEnum);
        }
  }, [theme]);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme) {
      localStorage.setItem("theme", ThemeEnum.THEME_DARK);
    }
  }, []);

  return (
    <>
      {children}
    </>
  )
}