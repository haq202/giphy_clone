export interface INavbarItem {
  label?: string;
  href?: string;
  icon?: string;
  dropdown?: INavbarItem[];
}

export type ButtonSeverityType =
  | 'success'
  | 'info'
  | 'warning'
  | 'primary'
  | 'help'
  | 'danger'
  | 'secondary'
  | 'contrast';

export type ButtonType = 'button' | 'submit' | 'reset';
