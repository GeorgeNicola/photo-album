import { FC, ReactNode } from "react";

interface MenuElement {
    name: string;
    icon: FC;
    content: string | ReactNode;
}

export default MenuElement;