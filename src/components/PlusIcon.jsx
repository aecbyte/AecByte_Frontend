const PlusIcon = ({ isOpen }) => {
    return (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
        aria-hidden="true"
      >
        <path
          d="M19.7913 13.5396H13.5413V19.7896H11.458V13.5396H5.20801V11.4563H11.458V5.2063H13.5413V11.4563H19.7913V13.5396Z"
          fill="black"
        />
      </svg>
    );
  };
  
  export default PlusIcon;
  