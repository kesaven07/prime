import { styled } from 'stitches.config';

const _TextArea = styled('div', {
  label: {
    width: '100%',
    display: 'inline-block',
    position: 'relative',
  },

  textarea: {
    width: '100%',
    margin: 0,
    padding: '$3 0',
    border: 'none',
    borderBottom: '1px solid $colors$secondary600',
    color: '$primary800',
    background: 'inherit',
    outline: 'none',
    resize: 'vertical',
    lineHeight: '1.6',
    minHeight: '200px',
    maxHeight: '400px',

    '&::placeholder': {
      opacity: 0,
    },
  },

  'input:focus+span, input:not(:placeholder-shown)+span, textarea:focus+span, textarea:not(:placeholder-shown)+span':
    {
      transform: 'translate(-12px ,-32px)',
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

const TextArea = ({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  required,
  css,
}: {
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
    <_TextArea css={css}>
      <label htmlFor={id}>
        <textarea
          onChange={onChange}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          spellCheck={false}
        />
        <span>{label}</span>
      </label>
    </_TextArea>
  );
};

export default TextArea;
