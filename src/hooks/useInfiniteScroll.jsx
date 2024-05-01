import { useEffect } from "react";

const useInfiniteScroll = (callback) => {
  useEffect(() => {
    const handleScroll = async () => {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;

      if (clientHeight + scrollTop + 1 >= scrollHeight) {
        // User scrolou até o fim da página?
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useInfiniteScroll;
