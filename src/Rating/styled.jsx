import styled from "styled-components";

const RatingContainer = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;
const Star = styled.i`
font-size: 12px;
margin: 0 2px;
color: #ffcc33;
`;

export {RatingContainer, Star}