import { useEffect, useState } from "react";

const Paginator = ({ total, limit, activePage, onChangePage }) => {
  
    const [lastPage, setlastPage] = useState(0);

    const getLastPage = (items) => items / limit;

    useEffect(() => {
        setlastPage(getLastPage(total));
        onChangePage(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [total]);

    const selectPage = (evt) => {
        const selectedItem = Number.parseInt(evt.target.dataset.item);
        onChangePage(selectedItem);
    };
    const prevPage = () => {
        const selectedItem = activePage -1;
        if (selectedItem >= 0) onChangePage(selectedItem);
    };
    const nextPage = () => {
        const selectedItem = activePage +1;
        if (selectedItem <= lastPage) onChangePage(selectedItem);
    };

    const PageItems = () => {
        let PageItems = [];
        for (let index = (activePage-2<0?0:activePage-2); index < ((activePage-2+limit)>lastPage?lastPage:(activePage-2+limit)); index++) {
            PageItems.push(
                <li className="page-item" key={"page-item-li"+index}>
                    <div
                        key={"page-item-"+index}
                        className={
                            "page-item " +
                            (index === activePage ? "active" : "")
                        }
                    >
                        <button
                            className="page-link"
                            onClick={selectPage}
                            data-item={index}
                        >
                            {index + 1}
                        </button>
                    </div>
                </li>
            );
        }
        return PageItems;
    };
    return (
        <nav
            aria-label="Page navigation example"
            className="pagination-section mt-0"
        >
            <ul className="pagination">
                <li className="page-item">
                    <button
                        onClick={prevPage}
                        className="page-link"
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Anterior</span>
                    </button>
                </li>
                {PageItems()}
                <li className="page-item">
                    <button
                        onClick={nextPage}
                        className="page-link"
                        aria-label="Next"
                    >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Siguiente</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Paginator;
