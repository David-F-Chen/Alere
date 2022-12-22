import React, { useEffect, useState } from 'react'
import { Col, Pagination } from 'antd'
import LD3A from './biblioteca/Livro Digital EI 3 ANOS'
import LD4A from './biblioteca/Livro Digital EI 4 ANOS'
import LD5A from './biblioteca/Livro Digital EI 5 ANOS'
import LD1AL from './biblioteca/Livro Digital EF 1º Ano Linguagem'
import LD1AM from './biblioteca/Livro Digital EF 1º Ano Matemática'

const CatalogoAlere: React.FC = () => {
  const [idx, setIdx] = useState(0)

  const lista = [<LD3A/>,<LD4A/>,<LD5A/>,<LD1AL/>,<LD1AM/>]

  useEffect(() => { }, [idx])

  return (
    <Col xl={24} md={24} sm={24}>
      <Pagination simple total={16} pageSize={1} onChange={(pagina) => setIdx(pagina - 1)}></Pagination>

      {lista[idx]}
    </Col>
  )
}

export default CatalogoAlere