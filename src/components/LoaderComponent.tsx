const LoaderComponent = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen
       fixed inset-0 z-50
        bg-linear-to-r from-brand-purple to-brand-navy"
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-8 border-brand-light"></div>
        <div className="absolute inset-0 rounded-full border-8 border-brand-gold border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
