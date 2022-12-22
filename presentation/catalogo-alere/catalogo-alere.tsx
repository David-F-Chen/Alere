import React, { useEffect, useState } from 'react'
import { Col, Pagination } from 'antd'
import LD3A from './biblioteca/Livro Digital EI 3 ANOS'
import LD4A from './biblioteca/Livro Digital EI 4 ANOS'
import LD5A from './biblioteca/Livro Digital EI 5 ANOS'
import LD1AL from './biblioteca/Livro Digital EF 1 Ano Linguagem'
import LD1AM from './biblioteca/Livro Digital EF 1 Ano Matemática'
import LD2AL from './biblioteca/Livro Digital EF 2 Ano Linguagem'
import LD2AM from './biblioteca/Livro Digital EF 2 Ano Matemática'
import LD3AL from './biblioteca/Livro Digital EF 3 Ano Linguagem'
import LD3AM from './biblioteca/Livro Digital EF 3 Ano Matemática'
import LD4AL from './biblioteca/Livro Digital EF 4 Ano Linguagem'
import LD4AM from './biblioteca/Livro Digital EF 4 Ano Matemática'
import LD5AL from './biblioteca/Livro Digital EF 5 Ano Linguagem'
import LD5AM from './biblioteca/Livro Digital EF 5 Ano Matemática'

const CatalogoAlere: React.FC = () => {
  const [idx, setIdx] = useState(0)

  const lista = [<LD3A/>,<LD4A/>,<LD5A/>,<LD1AL/>,<LD1AM/>,<LD2AL/>,<LD2AM/>,<LD3AL/>,<LD3AM/>,<LD4AL/>,<LD4AM/>,<LD5AL/>,<LD5AM/>]

  useEffect(() => { }, [idx])

  return (
    <Col xl={24} md={24} sm={24}>
      <Pagination simple total={13} pageSize={1} onChange={(pagina) => setIdx(pagina - 1)}></Pagination>

      {lista[idx]}
    </Col>
  )
}

export default CatalogoAlere