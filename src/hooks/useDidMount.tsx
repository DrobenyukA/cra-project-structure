import { EffectCallback, useEffect, useRef } from "react";

export function useDidMount(callback: EffectCallback) {
  const runStatus = useRef(true);

  useEffect(() => {
    if (runStatus.current) {
      return callback();
    }
    // Disabled because we are interested in a single execution
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
