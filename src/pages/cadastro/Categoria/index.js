import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <form>
            <label>Nome da Categoria:
                <input type="text"/>
            </label>
            <Button>
                Cadastrar
            </Button>
        </form>


        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;