import { Suspense } from "react";

const LazyImage = (props) => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <img {...props} />
    </Suspense>
  );
};

export default LazyImage;
