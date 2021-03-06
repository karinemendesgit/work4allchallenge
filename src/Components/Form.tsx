import { useState } from 'react';
import { useDispatch } from  'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import InputPassword from "./inputPassword";
import { loginActions } from  '../Store/login';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '350px',
  },
}));

function Form() {
  const classes = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const {
    register,
  } = useForm({
    mode: 'onChange',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function handleSubmit() {
    dispatch(loginActions.login({email: values.email, password: values.password}))
  }

  return (
    <div className={classes.root}>
      <h1>Faça seu login</h1>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
        <InputLabel htmlFor="email">E-mail</InputLabel>
        <FilledInput
          id="email"
          value={values.email}
          onChange={handleChange('email')}
          onInvalid={() => toast.error('E-mail inválido')}
          {...register('email', {
            required: 'E-mail e senha são obrigatórios',
          })}
        />
      </FormControl>
      <InputPassword value={values.password}/>
      <Button style={{height: '40px', width: '280px',border: '1px solid #008F8C', color: '#008F8C', marginTop: '40px'}} onClick={handleSubmit}>ENTRAR</Button>
    </div>
  );
}

export default Form;