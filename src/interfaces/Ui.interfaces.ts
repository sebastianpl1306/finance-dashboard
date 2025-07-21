export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export enum ButtonTypes {
    SUBMIT = 'submit',
    LINK = 'link',
    BUTTON = 'button'
}
  
export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    LINK = 'link',
}
  
export enum TypeVariant {
    TEXT = 'text',
    PASSWORD = 'password',
    EMAIL = 'email',
    URL = 'url',
    TIME = 'time',
}

export enum ThemeEnum {
    THEME_DARK = 'dark',
    THEME_LIGHT = 'light',
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}
  
export interface TabInterface {
    index: number;
    label: string;
    content: React.ReactNode;
}