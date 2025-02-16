import PropTypes from "prop-types";
const SectionTitle = ({ title }) => { 
  return (
    <h4 className="font-bold py-3 col-span-full border-b-4 border-b-primary">
      {title}
    </h4>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
};
