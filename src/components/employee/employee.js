import React from "react";
import { getPosition } from "../../utils/get-position";
import "./employee.scss";

const Employee = ({ id, name, role, isArchive, phone, birthday }) => {

  const title = `${id}: ${name} (${getPosition(role)}),
    Телефон: ${phone},
    Дата рждения: ${birthday}, 
    В архиве: ${isArchive ? 'да' : 'нет'}`;

 return (
   <tr className="employees-list__item" title={ title }>
     <td className="employees-list__name">
       { name }
     </td>
     <td className="employees-list__role">
       { getPosition(role) }
     </td>
     <td className="employees-list__phone">
       { phone }
     </td>
   </tr>
 );
};

export default Employee;