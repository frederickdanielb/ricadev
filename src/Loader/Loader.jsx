import loadingImage from "./../../images/loader.gif";
const Loader = ({ isFullPage = true, loading = false, ...restProps }) => {
  return (
    <>
      <div className="bg-white">
        {isFullPage && loading && (
          <div className="loader-wrapper img-gif">
            <img src={loadingImage} alt="" {...restProps} />
          </div>
        )}
        {!isFullPage && loading && (
          <img src={loadingImage} alt="" {...restProps} />
        )}
      </div>
    </>
  );
};

export default Loader;
