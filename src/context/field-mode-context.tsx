import { createContext } from 'react';

const FieldModeContext = createContext({
    fieldsCount: 5,
    mode: ''
});

export default FieldModeContext;