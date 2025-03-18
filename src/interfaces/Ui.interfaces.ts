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
  
export interface BreadcrumbItem {
    name: string;
    url: string;
}
  
export interface TabInterface {
    index: number;
    label: string;
    content: React.ReactNode;
}