'use client'

import { changeThemeHtml } from "@/helpers";
import { ThemeEnum, UiState } from "@/interfaces";
import { useUIStore } from "@/store";

interface UseUi extends UiState {
    handleChangeTheme: (theme: ThemeEnum) => void;
    handleToggleUserOptionsMenu: () => void;
}

export const useUi = (): UseUi => {
  const uiState = useUIStore((state) => state);

  /**
  * Permite abrir y cerrar el menu de opciones del usuario
  */
  const handleToggleUserOptionsMenu = () => {
    uiState.toggleUserOptionsMenu(!uiState.isOpenUserOptionsMenu);
  }

   /**
   * Permite cambiar el estado del modo claro y oscuro
   */
  const handleChangeTheme = (theme: ThemeEnum) => {
    localStorage.setItem("theme", theme);
    uiState.changeTheme(theme);
    changeThemeHtml(theme);
  };

  return {
    ...uiState,
    handleChangeTheme,
    handleToggleUserOptionsMenu,
  }
}