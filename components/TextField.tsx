import { styled } from 'stitches.config';

const _TextField = styled('div', {
  label: {
    width: '100%',
    display: 'inline-block',
    position: 'relative',
    willChange: 'transform',
  },

  input: {
    width: '100%',
    padding: '$3 0',
    border: 'none',
    borderBottom: '1px solid $colors$secondary600',
    color: '$primary800',
    background: 'inherit',
    outline: 'none',
    lineHeight: '1.6',

    '&::placeholder': {
      opacity: 0,
    },
  },

  'input:focus+span, input:not(:placeholder-shown)+span, textarea:focus+span, textarea:not(:placeholder-shown)+span':
    {
      transform: 'translate(-12px ,-22px)',
    },

  'label > span': {
    position: 'absolute',
    left: '10px',
    top: '7px',
    color: '$secondary600',
    transition: 'transform .1s ease-in',
    cursor: 'text',
  },
});

const TextField = ({
  type = 'text',
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  required,
  css,
}: {
  type?: string;
  label: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: any;
  required?: boolean;
  css?: any;
}) => {
  return (
    <_TextField css={css}>
      <label htmlFor={id}>
        <input
          onChange={onChange}
          type={type}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          spellCheck={false}
        />
        <span>{label}</span>
      </label>
    </_TextField>
  );
};

export default TextField;
