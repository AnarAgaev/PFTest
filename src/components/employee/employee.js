import React from "react";
import {connect} from "react-redux";
import { getPosition } from "../../utils/get-position";
import "./employee.scss";
import {Link} from "react-router-dom";

const Employee = ({
    id, name, role, isArchive,
    phone, birthday, filterArchive, filterRole
  }) => {

  const visibleArchive = !(filterArchive && !isArchive);
  const visibleRole = filterRole
    ? filterRole === role
    : true;

  const clazz = visibleArchive && visibleRole
    ? 'employees-list__item'
    : 'employees-list__item employees-list__item_hide';

  const title = `${id}: ${name} (${getPosition(role)}),
    Телефон: ${phone},
    Дата рждения: ${birthday}, 
    В архиве: ${isArchive ? 'да' : 'нет'}`;

 return (
   <tr className={ clazz } title={ title }>
     <td className="employees-list__name">
       <Link to={`edit-employee/${id}`}>
         { name }
       </Link>
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

const mapStateToProps = ({ filterArchive, filterRole }) => {
  return { filterArchive, filterRole };
};

export default   connect(
  mapStateToProps
)(Employee);