import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){

  const valuesInitials = {
    name: '',
    description: '',
    color: '',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valuesInitials);  

  function setValue(key, value){
    setValues({
       ...values,
      [key]: value,
    })
     
  }

  function handleChange(event){
    const {getAttribute, value} = event.target
    setValue(
      //event.target.getAttribute('name'),
      //event.target.value);
      getAttribute('name'),
      value
    );
  }

    return(
      <PageDefault>
        <h1>Cadastro de Categoria: {values.name}</h1>

        <form onSubmit={ function handleSubmit(event){
          event.preventDefault()
          setCategorias([
            ...categorias,
            values
          ])
          setValues(valuesInitials)          
        }}>
          
          <FormField
            nomeEl ="input"
            label="Nome da Categoria:"
            type="text"
            name="name"
            value={values['name']}
            onChange= {handleChange}
          />

          {/*<div>
          <label>Descrição:
                <textarea type="text"
                  name="description"
                  value={values.description}
                  onChange= {handleChange}
                />
            </label>
          </div> */}

          <FormField
            nomeEl ="textarea"
            label="Descrição:"
            type="text"
            name="description"
            value={values.description}
            onChange= {handleChange}
          />


          <FormField
            nomeEl ="input"
            label="cor:"
            type="color"
            name="color"
            value={values.color}
            onChange= {handleChange}
          />
                    

            <button>
                Cadastrar
            </button>

            <ul>
              {categorias.map((categoria, indice) => {
                
                return(
                  <li key={indice}>
                    <span style={{color: categoria.color}}>
                    {categoria.name} - {categoria.description}
                    </span>                    
                  </li>
                )

              })}
            </ul>
        </form>


        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;