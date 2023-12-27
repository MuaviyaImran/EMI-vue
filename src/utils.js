export const generateBaseSnackBarClasses = (type, variant) => {
  switch (type) {
    case "secondary":
      return "before:bg-secondary";
    case "info":
      return "border-info-light bg-info-light/20 before:bg-info";
    case "danger":
      return "border-danger-light bg-danger-light/20 before:bg-danger";
    case "warning":
      return "border-warning-light bg-warning-light/20 before:bg-warning";
    case "success":
      return "border-success-light bg-success-light/20 before:bg-success";
    default:
      return "border-secondary-light/40 bg-white text-secondary";
  }
};
export const generateBaseButtonClasses = (variant, type) => {
  switch (type) {
    case "primary":
      return variant === "filled"
        ? "bg-primary text-secondary border-primary"
        : "bg-transparent text-primary bg-white border-primary";
    case "secondary":
      return variant === "filled"
        ? "bg-secondary text-white border-secondary"
        : "bg-transparent text-secondary bg-white border-secondary";
    case "info":
      return variant === "filled"
        ? "bg-info text-white border-info"
        : "bg-transparent text-info bg-white border-info";
    case "danger":
      return variant === "filled"
        ? "bg-danger text-white"
        : "bg-transparent text-danger bg-white border-danger";
    case "warning":
      return variant === "filled"
        ? "bg-warning text-white"
        : "bg-transparent text-warning bg-white border-warning";
    case "success":
      return variant === "filled"
        ? "bg-success text-white"
        : "bg-transparent text-success bg-white border-success";
    case "ghost":
      return "bg-transparent text-dark bg-white border-transparent";
    default:
      return "bg-primary text-secondary border-primary";
  }
};
