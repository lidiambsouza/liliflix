import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color:  #d01825;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const FooterImagem = styled.img`
  max-width: 4em;
  max-height: 3em;
`;

export const FooterLink = styled.a`
 color: var(--white);
`;