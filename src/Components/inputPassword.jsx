import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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

function InputPassword(value) {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const {
    register,
  } = useForm({
    mode: 'onChange',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <FilledInput
          id="password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          onInvalid={() => toast.error('E-mail inválido')}
          {...register('email', {
            required: 'E-mail e senha são obrigatórios',
          })}
          endAdornment={
          <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
          </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

export default InputPassword;