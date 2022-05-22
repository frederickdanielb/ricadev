import loadingImage from "./../../images/loader.gif";
import "./Loader.css";
const Loader = ({ isFullPage = true, loading = false, ...restProps }) => {
  let className =
    isFullPage && loading ? "loader-wrapper img-gif" : "loader-in-page";
  return (
    <>
      {loading && (
        <div className="bg-white">
          <div className={className}>
            <img src={loadingImage} alt="" {...restProps} />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
