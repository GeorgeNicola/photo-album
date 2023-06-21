import { FC, ReactNode } from "react";

export type menuType = {
    name: string;
    icon: FC;
    content: string | ReactNode;
}
