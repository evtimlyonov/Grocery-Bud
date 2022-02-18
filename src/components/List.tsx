export const List = ({
  id,
  name,
  deleteHandler,
  editHandler,
}: {
  id: string;
  name: string;
  deleteHandler: (id: string) => void;
  editHandler: (id: string) => void;
}): JSX.Element => {
  return (
    <article
      key={id}
      className='capitalize flex justify-between items-center mb-2 py-1 px-4 hover:rounded hover:bg-[#f1f5f8] transition duration-500'>
      <p className='title'>{name}</p>
      <div className='flex'>
        <button
          type='button'
          className='transition duration-500 opacity-50 hover:opacity-100 text-xs mx-[0.15rem]'
          onClick={() => editHandler(id)}>
          <svg
            className='w-3 h-3'
            fill='#25bb32'
            strokeWidth='0'
            viewBox='0 0 576 512'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z'></path>
          </svg>
        </button>
        <button
          type='button'
          className='transition duration-500 opacity-50 hover:opacity-100 text-xs mx-[0.15rem]'
          onClick={() => deleteHandler(id)}>
          <svg
            className='w-3 h-3'
            stroke='#e66b6b'
            fill='#e66b6b'
            strokeWidth='0'
            viewBox='0 0 448 512'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z'></path>
          </svg>
        </button>
      </div>
    </article>
  );
};
