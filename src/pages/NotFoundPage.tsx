import EmptyStateComponent from "../components/EmptyStateComponent";

const NotFoundPage = () => {
  return (
    <div>
      <EmptyStateComponent
        title="404 (Not Found)"
        desc="The url you visited is not defined"
        btnTitle="Return Back To The Home Page"
        href="/"
      />
    </div>
  );
};

export default NotFoundPage;
