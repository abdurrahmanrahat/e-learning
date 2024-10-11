const DescriptionTabs = ({ value }) => {
  return (
    <div
      className="description-content prose leading-loose"
      dangerouslySetInnerHTML={{ __html: value }}
    ></div>
  );
};

export default DescriptionTabs;
