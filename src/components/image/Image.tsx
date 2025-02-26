import styled from "styled-components";
import image from './test.jpg';
import { ImageProps } from "./ImageTypes";

const StyledImage = styled.img`
    height: fit-content;
    width: fit-content;
`;

const Image = ({}:ImageProps) =>{
    const imageProps = {
        src: image
    };

    return(
        <StyledImage {...imageProps}/>
    )
}

export default Image;