// interfaces for commons

export interface SwitchProps {
  options: readonly string[];
  handleClick: (arg: string) => void;
  currentLanguage: string;
}

export interface NavbarElementProps {
  label: string;
  selectNavbarItem: (arg: string) => void;
}

// interfaces for component
export interface NavbarProps {
  selectNavbarItem: (arg: string) => void;
}
