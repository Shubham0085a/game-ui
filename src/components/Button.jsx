import PropTypes from "prop-types";

const Button = ({ title, id, rightIcon, leftIcon, containerClass, link }) => {
  const ButtonContent = (
    <>
      {leftIcon}
      <span className=" relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </>
  );
  return link ? (
    <a
      href={link}
      id={id}
      // target="_blank"
      // rel="noopener noreferrer"
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {ButtonContent}
    </a>
  ) : (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {ButtonContent}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rightIcon: PropTypes.element,
  leftIcon: PropTypes.element,
  containerClass: PropTypes.string,
  link: PropTypes.string,
};

Button.defaultProps = {
  rightIcon: null,
  leftIcon: null,
  containerClass: "",
  link: null,
};

export default Button;
