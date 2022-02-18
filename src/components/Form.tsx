import { Alert } from './Alert';

export const Form = ({
  register,
  handleSubmit,
  submitHandler,
  isEditing,
  taskName,
  onChangeHandler,
  alert,
  showAlert,
  list,
}: any) => {
  return (
    <form
      className='flex flex-col items-center'
      onSubmit={handleSubmit(submitHandler)}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h3 className='mb-6 text-2xl font-bold capitalize'>grocery bud</h3>
      <div className='flex justify-center w-[90%]'>
        <input
          {...register('name')}
          type='text'
          className={`flex grow rounded-tl rounded-bl bg-[#f1f5f8] pl-4`}
          placeholder='e.g. eggs'
          value={taskName}
          onChange={onChangeHandler}
        />
        <button
          type='submit'
          className='rounded-tr rounded-br capitalize px-2 py-1 transition duration-500 bg-[#a5d5f8] hover:bg-[#49a6e9] hover:text-white'>
          {isEditing ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>
  );
};
