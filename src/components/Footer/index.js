import React from 'react';
import { FooterBase, FooterImagem, FooterLink} from './styles';
import ParaLogo from '../../assets/img/Bandeira_do_Para.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <FooterImagem src={ParaLogo} alt="Logo Para" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <FooterLink href="https://www.alura.com.br/">
          Imersão React da Alura
        </FooterLink>
      </p>
    </FooterBase>
  );
}

export default Footer;
