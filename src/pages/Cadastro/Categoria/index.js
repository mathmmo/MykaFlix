import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }
  const [categorias, setCategorias] = useState([]);
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

  useEffect(() => {
    const URL_API = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://myka-flix.herokuapp.com/categorias';
    fetch(URL_API).then(async (serverResponse) => {
      const objResponse = await serverResponse.json();
      console.log(objResponse);
      setCategorias([
        ...objResponse,
      ])
    });
  },[]);

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

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

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