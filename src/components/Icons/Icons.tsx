import React from "react";
import cn from "classnames";

import { ReactComponent as LikeIcon } from "./svg/Like.svg";
import { ReactComponent as FavotiteIcon } from "./svg/Vector.svg";
import { ReactComponent as RedLikeIcon } from "./svg/redLike.svg";
import { ReactComponent as SearchIcon } from "./svg/search.svg";
import styles from "./Icon.module.css";

interface IconsProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "search"
    | "like"
    | "redLike"
    | "favLike";
}

const icons: Record<IconsProps["name"], React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  like: LikeIcon,
  search: SearchIcon,
  redLike: RedLikeIcon,
  favLike: FavotiteIcon,
};

const Icons: React.FC<IconsProps> = ({ className, name, ...props }) => {
  const Icon = icons[name];
  return <Icon className={cn(styles.icon, className)} {...props} />;
};

export default Icons;
