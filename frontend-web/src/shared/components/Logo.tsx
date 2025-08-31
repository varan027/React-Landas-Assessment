import classNameMerge from "../utils/classNameMerge";

type LogoProps = {
   className?: string;
}

const Logo:React.FC<LogoProps> = ({className}) => {
  return (
    <span className={classNameMerge("text-yellow-500 font-extrabold text-3xl lg:text-2xl", className)}>
      LANDAS
    </span>
  );
};

export default Logo;
