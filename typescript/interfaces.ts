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

export interface BurgerMenuButtonProps {
  handleBurgerMenuButtonClick: () => void;
  isMenuOpen: boolean;
}

export interface IconProps {
  icon: string;
}

export interface CardProps {
  title: string;
  img: string;
  link: string;
  stack: string[];
  description: string;
}

// interfaces for component
export interface NavbarProps {
  selectNavbarItem: (arg: string) => void;
  handleBurgerMenuButtonClick: () => void;
  menuOpen: boolean;
  options: string[];
}

export interface MenuProps {
  options: string[];
  handleMenuSelection: (arg: string) => void;
}
