import { useState, useEffect } from 'react';
const url = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

type Mode = {
  name: string,
  field: number,
  id: string
}

interface SelectBarProps {
  setFields: React.Dispatch<React.SetStateAction<{ fieldsCount: number, mode: string }>>
}

function SelectBar(props: SelectBarProps) {
  const [data, setData] = useState<Mode[]>([]);
  const [option, setOption] = useState<string>('');
  const defaultValue = 'Pick Mode';

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value)
  }


  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const field = data.find(item => item.name === option);
    if (typeof field === 'object') {
      props.setFields({ fieldsCount: field.field, mode: field.name });
    }
  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((result) => setData(result))
  }, [])

  return (
    <form id='fields-mode' onSubmit={onSubmitHandler} className='mb-6 flex items-center gap-8'>
      <select name='mode' id='mode' onChange={onChangeHandler} defaultValue={defaultValue}>
        <option value={defaultValue} disabled >Pick Mode</option>
        {data.map((item: Mode) => {
          return (
            <option key={item.id} value={item.name} id={item.id}>{item.name}</option>
          )
        })}
      </select>
      <button type='submit' className=''>START</button>
    </form>
  )
}

export default SelectBar;