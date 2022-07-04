import { MdModeEdit, MdDelete, MdSave } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BsBookmarkPlusFill } from 'react-icons/bs';
import { Pagination, Table } from '@components/containers';
import { Button, Checkbox, FormGroup, Input, Spiner } from '@components/ui';
import { getCategoryList, createCategory, updateCategory } from '@services/api';
import { useDebounce } from '@hooks';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { VscEmptyWindow } from 'react-icons/vsc';
import { Paragraph } from '@components/typography';

const ProductCategories = () => {
  // list categories in table
  const [categories, setCategories] = useState([]);

  // item selected to update
  const [categorySelectedToUpdate, setCategorySelectedToUpdate] = useState(undefined);

  // item selected to delete
  const [categorySelectedToDelete, setCategorySelectedToDelete] = useState(undefined);

  // search input
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // pagination
  const [dataPagination, setDataPagination] = useState({
    totalPages: 0,
    prevPage: null,
    nextPage: null,
    page: 0,
    limit: 10
  });

  const [query, setQuery] = useState({});

  const restartDataWithPaginate = (data) => {
    setCategories(data.categories);
    setDataPagination(data.info);
  };

  const handlePageChange = async (page) => {
    setDataPagination({ ...dataPagination, page });
    setIsLoading(true);
    const { data } = await getCategoryList({ ...query, page, limit: dataPagination.limit });
    restartDataWithPaginate(data);
    setIsLoading(false);
  };

  /**
   * Obtener la lista de categorías inciales
   */
  const getInitialCategories = async () => {
    setIsLoading(true);
    const { data } = await getCategoryList({ limit: dataPagination.limit });

    restartDataWithPaginate(data);

    setIsLoading(false);
  };

  const notify = (message) => toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
  });
  /**
   * Crear una categoría
   */
  const addCategory = async (name) => {
    setIsLoading(true);
    const categoryCreated = await createCategory(name);
    console.log(categoryCreated);
    await getInitialCategories();
    setIsLoading(false);
    notify(categoryCreated.message);
  };

  const handleAddCategory = async () => {
    await addCategory(searchTerm);
    await getInitialCategories();
  };

  const handleKeyDownCreate = async (e) => {
    const { target: { value }, keyCode } = e;
    if (keyCode === 13 && categories.length === 0) {
      await addCategory(value);
    }
  };

  /**
   * Editar una categoría
   */
  const handleKeyDownUpdate = async (e) => {
    const { target: { value }, keyCode } = e;
    if (keyCode === 13) {
      // Actualizar
      const categoryUpdated = await updateCategory(categorySelectedToUpdate, value);
      console.log(categoryUpdated);
      notify(categoryUpdated.message);
      setCategorySelectedToUpdate(undefined);
    }
  };

  const handleEditCategory = async (id) => {
    const input = document.getElementById(`category-input-name-${id}`);

    if (id === categorySelectedToUpdate) {
      // Actualizar
      const categoryUpdated = await updateCategory(categorySelectedToUpdate, input.value);
      console.log(categoryUpdated);
      notify(categoryUpdated.message);
      setCategorySelectedToUpdate(undefined);
    } else if (categorySelectedToUpdate) {
      console.log('NO PUEDO EDITAR PORQUE UNA EDICIÓN ESTÁ EN PROGRESO');
    } else {
      setCategorySelectedToUpdate(id);
      input.focus();
    }
  };

  /**
   * Eliminar una categoría
   */
  const handleRemoveCategory = (id) => {
    if (categorySelectedToDelete) {
      console.log('NO PUEDO ELIMINAR PORQUE UNA ELIMINACIÓN ESTÁ EN PROGRESO');
    } else {
      setCategorySelectedToDelete(id);
      setTimeout(() => {
        // notify('se eliminó la categoría');
        setCategorySelectedToDelete(undefined);
      }, 1000);
    }
  };

  /**
   * Buscar una categoría
   */
  useEffect(() => {
    (async () => {
      if (debouncedSearchTerm) {
        setIsLoading(true);

        const query = { name: debouncedSearchTerm, limit: dataPagination.limit };

        const { data } = await getCategoryList(query);

        setQuery(query);
        restartDataWithPaginate(data);
        setIsLoading(false);
      } else {
        setQuery({});
        await getInitialCategories();
      }
    })();
  }, [debouncedSearchTerm]);

  /**
   * Listar categorias iniciales
   */
  useEffect(() => {
    (async () => {
      await getInitialCategories();
    })();
  }, []);

  return (
    <>
      <FormGroup buttonFloatRight className='mb-4'>
        <Input
          autoFocus
          type="text"
          inputMode='search'
          onKeyDown={handleKeyDownCreate}
          defaultValue={searchTerm}
          placeholder="Escribir para buscar o agregar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {categories.length === 0
          ? (<Button
            color='primary'
            variant='filled'
            onClick={handleAddCategory}
          > <BsBookmarkPlusFill /> Agregar categoría </Button>)
          : (<BiSearch />)}
      </FormGroup>

      <Table.Wrapper maxHeight={400} border>
        {categories.length === 0
          ? (<Table.Empty>
            <Paragraph>
              No hay resultados
            </Paragraph>
            <VscEmptyWindow />
          </Table.Empty>)
          : (
            <Table.Content minWidth={500}>
              <Table.Head sticky>
                <Table.Row>
                  <Table.Col as='th' scope='col'><Checkbox type="checkbox" /> </Table.Col>
                  <Table.Col as='th' scope='col'> Codigo</Table.Col>
                  <Table.Col as='th' scope='col'>Nombre de categoría</Table.Col>
                  <Table.Col as='th' scope='col' className='text-end'>Acciones</Table.Col>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {categories.map(category => {
                  const key = `category-input-name-${category.id}`;

                  return (
                    <Table.Row key={key}>
                      <Table.Col as='th' scope='row'>
                        <Checkbox type="checkbox" />
                      </Table.Col>
                      <Table.Col className='text-center'> {category.id}</Table.Col>
                      <Table.Col className='text-center'>
                        <Table.InputEdit
                          id={key}
                          type="text"
                          className='text-center'
                          onKeyDown={handleKeyDownUpdate}
                          readOnly={categorySelectedToUpdate !== category.id}
                          defaultValue={category.name}
                        />
                      </Table.Col>
                      <Table.Col className='text-end'>
                        {Number(category.id) !== 1 && (
                          <>
                            <Button
                              icon
                              tooltip
                              data-tooltip='Editar'
                              onClick={() => handleEditCategory(category.id)}
                            >
                              {categorySelectedToUpdate === category.id
                                ? (<MdSave />)
                                : (<MdModeEdit />)}
                            </Button>

                            <Button
                              icon
                              tooltip
                              data-tooltip='Eliminar'
                              disabled={categorySelectedToDelete === category.id}
                              onClick={() => handleRemoveCategory(category.id)}
                            >
                              {categorySelectedToDelete === category.id
                                ? (<Spiner sm />)
                                : (<MdDelete />)}
                            </Button>
                          </>
                        )}
                      </Table.Col>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>)}
      </Table.Wrapper>

      <div className='text-end mt-4'>
        <Pagination
          totalDocs={categories.length}
          totalPages={dataPagination.totalPages}
          currentPage={dataPagination.page}
          onPageChange={handlePageChange}
          prev={dataPagination.prevPage}
          next={dataPagination.nextPage}
        />
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ProductCategories;
