export interface INavbarItem {
  label: string;
  value: NavbarType;
  icon?: string;
}

export type NavbarType = 'POCHACCO' | 'TONTON' | 'YEON' | 'BEE' | 'OTHERS';

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
