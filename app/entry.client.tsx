import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RemixBrowser } from "@remix-run/react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "~/theme/CreateEmotionCache";
import ClientStyleContext from "~/theme/ClientStyleContext";
import CssBaseline from "@mui/material/CssBaseline";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}
function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache());

  const clientStyleContextValue = React.useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache());
      },
    }),
    []
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>
        <CssBaseline />
        {children}
      </CacheProvider>
    </ClientStyleContext.Provider>
  );
}

const hydrate = () => {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(
      document,
      <ClientCacheProvider>
        <CssBaseline />
        <RemixBrowser />
      </ClientCacheProvider>
    );
  });
};

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  setTimeout(hydrate, 1);
}
