import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.sectionBg};
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: ${props => `1px solid ${props.theme.colors.white}`};
`;

export const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  height: fit-content;
  padding: 15px;
  background-color: antiquewhite;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => `${props.theme.spacing(6)}`};
`;
