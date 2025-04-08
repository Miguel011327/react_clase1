import { BiColor } from "react-icons/bi";

export const List = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-sky-900">
            <tr>
              <th>Id_Personaje</th>
              <th>Nombre</th>
              <th>Ocupación</th>
              <th>Papel principal</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Isaac Clarke</td>
              <td>Ingeniero</td>
              <td>Salvador o Verdugo de la humanidad</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Fantasma de Hollownest</td>
              <td>Exterminador de plagas</td>
              <td>Salvador o Verdugo de Hollownest</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>FukuroNoMusuko Okami</td>
              <td>Shinobi</td>
              <td>Salvador o Verdugo de Ashina</td>
            </tr>
            <tr>
              <th>4</th>
              <td>El Prisionero</td>
              <td>Científico</td>
              <td>Salvador del universo</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Arthur Morgan</td>
              <td>Forajido</td>
              <td>Salvador de la banda</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
