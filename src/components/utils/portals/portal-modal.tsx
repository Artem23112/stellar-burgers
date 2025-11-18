import { Portal } from "@/components/utils/portals/portal";
import { useMemo, type FC } from "react";

type PropsT = {
  children: React.ReactNode;
};

export const PortalModal: FC<PropsT> = ({ children }) => {
  const container = useMemo(() => {
    if (typeof document === "undefined") return null;
    return document.getElementById("modals");
  }, []);

  if (!container) return null;

  return <Portal target={container}>{children}</Portal>;
};
