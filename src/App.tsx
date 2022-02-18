import { v4 as uuid } from 'uuid';
import { useForm } from 'react-hook-form';
import { List } from './components/List';
import { Form } from './components/Form';
import { connect } from 'react-redux';
import { RootState, RootDispatch } from './models/store';
import { useState } from 'react';

const mapState = (state: RootState) => ({
  groceries: state.groceries,
});

const mapDispatch = (dispatch: RootDispatch) => ({
  addGrocery: ({ id, name }: { id: string; name: string }) =>
    dispatch.groceries.addGrocery({ id, name }),
  editGrocery: ({ id, name }: { id: string; name: string }) =>
    dispatch.groceries.editGrocery({ id, name }),
  dellGrocery: (id: string) => dispatch.groceries.dellGrocery(id),
  clearGrocery: dispatch.groceries.clearGrocery,
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

type FormType = {
  name: string;
};
const MainApp = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskId, setTaskId] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const { register, handleSubmit, reset } = useForm<FormType>({
    defaultValues: {
      name: '',
    },
    mode: 'onChange',
  });

  const submitHandler = (data: FormType) => {
    if (!taskName) {
      showAlert(true, 'danger', 'field required');
    } else if (taskName && isEditing) {
      props.editGrocery({ id: taskId, name: taskName });
      setTaskName('');
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      props.addGrocery({ id: uuid(), name: data.name });
      showAlert(true, 'success', 'item added to the list');
      reset();
      setTaskName('');
      setIsEditing(false);
    }
  };

  const clearItemsHandler = () => {
    props.clearGrocery();
    showAlert(true, 'danger', 'empty list');
  };

  const deleteHandler = (id: string) => {
    props.dellGrocery(id);
    showAlert(true, 'danger', 'item removed');
  };

  const editHandler = (id: string) => {
    setIsEditing(true);
    const currName: { id: string; name: string }[] = props.groceries.filter(
      (el) => el.id === id
    );
    setTaskName(currName[0].name);
    setTaskId(currName[0].id);
  };

  const onChangeHandler = (e: any) => {
    setTaskName(e.target.value);
  };

  console.log('rerender');
  return (
    <section className='bg-white mx-auto w-[90vw] max-w-xl mt-40 rounded shadow-xl p-8'>
      <Form
        register={register}
        handleSubmit={handleSubmit}
        submitHandler={submitHandler}
        isEditing={isEditing}
        taskName={taskName}
        onChangeHandler={onChangeHandler}
        alert={alert}
        showAlert={showAlert}
        list={props.groceries}
      />

      {props.groceries.length > 0 && (
        <div className='mt-8 w-[90%] mx-auto'>
          <div className='grocery-list'>
            {props.groceries.map((el) => (
              <List
                key={el.id}
                id={el.id}
                name={el.name}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
              />
            ))}
          </div>
          <button
            className='capitalize transition duration-500 w-40 h-6 text-[#e66b6b] hover:text-[#bb2525] text-sm flex justify-center mx-auto mt-8'
            onClick={clearItemsHandler}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export const App = connect(mapState, mapDispatch)(MainApp);
