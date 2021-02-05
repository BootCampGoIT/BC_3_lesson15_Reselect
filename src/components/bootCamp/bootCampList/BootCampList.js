import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { deleteCamp, setFilter } from "../../../redux/actions/bootCampActions";
import { BootCampFormContainer } from "./BootCampListStyled";

const BootCampList = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.bootCamps.filter);

  const bootCamps = useSelector((state) =>
    state.bootCamps.bootCamps.filter((item) =>
      item.campName.toLowerCase().includes(state.bootCamps.filter.toLowerCase())
    )
  );

  const onHandleDelete = (e) => {
    const { id } = e.target;
    dispatch(deleteCamp(id));
  };
  const onHandleChange = (e) => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <BootCampFormContainer>
      <div className='options'>
        <h2>Bootcamps count: {bootCamps.length}</h2>
        {!!bootCamps.length && (
          <label>
            Filter
            <input type='text' onChange={onHandleChange} value={filter} />
          </label>
        )}
      </div>

      <ul className='campList'>
        {bootCamps.map((camp) => (
          <li key={camp.id} className='campListItem'>
            <p>Name: {camp.campName}</p>
            <p>Number: {camp.campNumber}</p>
            <p>Students count: {camp.students.length}</p>
            <button id={camp.id} onClick={onHandleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </BootCampFormContainer>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     bootCamps: state.bootCamps.bootCamps.filter((item) =>
//       item.campName.toLowerCase().includes(state.bootCamps.filter.toLowerCase())
//     ),
//     filter: state.bootCamps.filter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteCamp: (id) => {
//       dispatch(deleteCamp(id));
//     },
//     setFilter: (id) => {
//       dispatch(setFilter(id));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(BootCampList);
export default BootCampList;
