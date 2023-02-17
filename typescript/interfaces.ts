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

// interfaces for component
export interface NavbarProps {
  selectNavbarItem: (arg: string) => void;
  handleBurgerMenuButtonClick: () => void;
  menuOpen: boolean;
  options: string[];
}

export interface MenuProps {
  options: string[];
}
