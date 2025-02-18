export type ButtonProps = {
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaExpanded?: string;
    ariaControls?: string;
    onClick?: (...args: unknown[]) => unknown;
    disabled?: boolean;
    variant: "light" | "dark";
    children: React.ReactNode;
  };