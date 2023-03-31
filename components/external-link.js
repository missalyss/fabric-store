import ExternalLinkIcon from "../assets/icons/external-link-icon";

const ExternalLink = ({ className, href, text, iconColor, ...props }) => {
  return (
    <div className={`flex align-center ${className}`}>
      <a className="mr1" href={href} target="_blank" rel="noreferrer" {...props}>
        {text}
      </a>
      <ExternalLinkIcon color={iconColor} height="20px" width="20px" />
    </div>
  );
};

export default ExternalLink;
