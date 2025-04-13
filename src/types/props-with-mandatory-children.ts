import { ReactNode } from "react";

export type PropsWithMandatoryChildren<P = unknown> = P & {
  children: ReactNode;
};
