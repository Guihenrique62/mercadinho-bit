import { GetServerSideProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

//Interface para os dados da API
interface ApiResponse {
   name: string;
   timestamp: Date;
}

//Utiliza o Next para consultar do lado do servidor SSR
export const getServerSideProps: GetServerSideProps = async () =>{
   //Consulta os dados da API passando o caminho completo
   const serverSideData: ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())

   //Retorna as Props para o componente
   return { props: {serverSideData} }
}

const Dynamic: NextPage = (props: {
   children?: ReactNode
   serverSideData?: ApiResponse
}) => {
   const [clientSideData, setClientSideData] = useState<ApiResponse>()

   //Função para consultar a API e inserir os dados no State
   const fetchData = async () => {
      const data = await fetch("api/hello").then(res => res.json())
      setClientSideData(data)
   }
   //Utiliza o useEffect padrao do React para renderizar os dados da API
   useEffect(()=>{
      fetchData()
   }, [])

   return (
      <Container tag={"main"}>
         <h1 className="my-5">Como Funcionam as Rederizações do next</h1>

         <Row>
            <Col>
               <h3>Gerado no Servidor:</h3>
               <h2>{props.serverSideData?.timestamp.toString()}</h2>
            </Col>
            
            <Col>
               <h3>Gerado no Cliente:</h3>
               <h2>{clientSideData?.timestamp.toString()}</h2>
            </Col>
         </Row>
      </Container>
   )
}

export default Dynamic