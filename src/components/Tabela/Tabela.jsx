import { Tabela } from "./Style";
const Tabela = () => (
  <Tabela>
    <table>
      <tr>
          <th>ID</th>
          <th>Código</th>
          <th>Analysis Name</th>
          <th>Usuário</th>
          <th>Injected Activity</th>
          <th>Calibration</th>
          <th>Status</th>
          <th>Imagem Paciente</th>
          <th>Report</th>
          <th>Created at</th>
          <th>Tipo</th>
      </tr>
      <tr>
          <td>57</td>
          <td>1231234</td>
          <td>Paciente 1</td>
          <td>Tadeu Tovar</td>
          <td>42,0</td>
          <td>CL-12 <a href=""><i class="fa-regular fa-circle-down"></i></a></td>
          <td><span class="nao-visto">Não visto</span></td>
          <td>img1.zip <a href=""><i class="fa-regular fa-circle-down"></i></a></td>
          <td> - <a href=""><i class="fa-solid fa-cloud-arrow-up"></i></a></td>
          <td>01/04/2024 00:30</td>
          <td>Clinic Doscimetries</td>
        </tr>
    </table>
  </Tabela>
)

export default Tabela;
