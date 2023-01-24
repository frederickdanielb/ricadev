import styled from 'styled-components';

export const IncludeUl = styled.ul`
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.78);
  margin-top: 10px;
  padding-left: 0;
  margin-bottom: 0;
`;

export const IncludeLi = styled.li`
  display: inline-block;
  letter-spacing: 0.03em;
  text-align: center;
  margin-right: 12px;
  font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
	${props => !props.included ? 'opacity: 0.4;': ''}
`;

export const IncludeContainer = styled.div`
  margin-top: 14px;
  box-sizing: border-box;
`

export const IncludeIcon = styled.i`
	font-size: 14px;
  margin-right: 5px;
  display: block;
`