import React, { ImgHTMLAttributes } from "react";
import { theme } from "../../global/theme";
import { IconImg } from "./style";

type IconProps = ImgHTMLAttributes<HTMLImageElement>;

export function Icon(props: IconProps) {
    return (
        <IconImg src={props.src} alt="Icone" height={props.height} width={props.width} />
    )
}

export function EyeIcon() {
    return (
        {/* <AiFillEye
            color={theme.colors.primary.color60}
            style={{
                width: 24,
                height: 20
            }}
        /> */}
    )
}

