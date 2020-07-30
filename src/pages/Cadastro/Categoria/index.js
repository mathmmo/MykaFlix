import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(initialValues);

  const setValue = (key, value) => (
    setValues({
      ...values,
      [key]:value
    })
  );

  const handleChange = (event) => (
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    )
  );

  return(
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={(event) => (
        event.preventDefault(),
        setCategorias([
          ...categorias,
          values
        ])
      )}>
        <FormField
          label="Categoria"
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
        />
        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </label>
        </div>
        
        <FormField
          label="Descrição"
          type='textarea'
          name='description'
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type='color'
          name='color'
          value={values.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => (
          <li key={`${categoria}${index}`}>{categoria.name}</li>
        ))}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;