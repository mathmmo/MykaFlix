import React from 'react';
import styled , {css} from 'styled-components'

const FormFieldWarapper = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }

    input[type="color"] {
        padding-left: 56px;
    }
`;

const Label = styled.label``;
Label.Text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute;
    top: 0;
    left: 16px;

    display: flex;
    align-items: center;

    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;

    transition: .1s ease-in-out;
`;

const Input = styled.input`
    background: #535850;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #535850;

    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus{
        border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + span {
        transform: scale(.6) translateY(-10px);
    }

    ${({hasValue}) =>hasValue && css`
        &:not([type='color']) + span {
            transform: scale(.6) translateY(-10px);
        }
    `
    }
`;

const FormField = ({value, type, name, onChange, label}) => {
    const isTextArea = type === 'textarea';
    const tag = isTextArea ? 'textarea' : 'input';
    const fieldId = `id_${name}`;
    const hasValue = Boolean(value.length);

    return(
        <FormFieldWarapper>
            <Label htmlFor={fieldId}>
                <Input
                    as={tag}
                    id={fieldId}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    hasValue={hasValue}
                />
                <Label.Text>
                    {label}
                </Label.Text>
            </Label>
        </FormFieldWarapper>
    )
};

FormField.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {},
}
export default FormField;