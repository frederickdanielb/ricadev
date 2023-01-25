import { useEffect, useState } from "react";

const RoomBox = ({idx,room, onUpdate, disableAddButton, onRemove, limits}) => {
    const [adults, setAdults] = useState(limits.minAdultsPerRoom);
    const [childs, setChilds] = useState([]);
    const [ageChilds, setAgeChilds] = useState([{age: limits.minAgeChild},{age: limits.minAgeChild}]);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    useEffect(() => {
        setAdults(room.adults);
        setChilds(room.childs);
    }, [room]);

    useEffect(() => {
        if (isFirstLoad){
            setIsFirstLoad(false);
        }else{
            onUpdate(idx,{adults: adults, childs: childs, ages: ageChilds});
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[adults,childs]);
    const checkAdultLimits = (newValue) => {
        return newValue<=limits.maxAdultsPerRoom && newValue >= limits.minAdultsPerRoom;
    }
    const checkChildLimits = (newValue) => {
        return newValue<=limits.maxChildsPerRoom && newValue >= limits.minChildsPerRoom;
    }
    const checkChildAgeLimits = (newValue) => {
        return newValue<=limits.maxAgeChild && newValue >= limits.minAgeChild;
    }
    const addAdult = (evt) => {
        evt.preventDefault();
        let newValue = (adults+1);
        if (checkAdultLimits(newValue)) setAdults(newValue);
    }
    const addChild = (evt) => {
        evt.preventDefault();
        let newValue = (childs+1);
        if (checkChildLimits(newValue)) setChilds(newValue);
    }
    const removeAdult = (evt) => {
        evt.preventDefault();
        let newValue = (adults-1);
        if (checkAdultLimits(newValue)) setAdults(newValue);
    }
    const removeChild = (evt) => {
        evt.preventDefault();
        let newValue = (childs-1);
        if (checkChildLimits(newValue)) setChilds(newValue);
    }
    const removeRoom = (evt) => {
        evt.preventDefault();
        onRemove(idx);
    }
    const addAgeFirstChild = (evt) => {
        evt.preventDefault();
        let newValue = (ageChilds[0].age+1);
        if (checkChildAgeLimits(newValue)) setAgeChilds([{age:newValue},{age:ageChilds[1].age}]);
    }
    const removeAgeFirstChild = (evt) => {
        evt.preventDefault();
        let newValue = (ageChilds[0].age-1);
        if (checkChildAgeLimits(newValue)) setAgeChilds([{age:newValue},{age:ageChilds[1].age}]);
    }
    const addAgeSecondChild = (evt) => {
        evt.preventDefault();
        let newValue = (ageChilds[1].age+1);
        if (checkChildAgeLimits(newValue)) setAgeChilds([{age:ageChilds[0].age},{age:newValue}]);
    }
    const removeAgeSecondChild = (evt) => {
        evt.preventDefault();
        let newValue = (ageChilds[1].age-1);
        if (checkChildAgeLimits(newValue)) setAgeChilds([{age:ageChilds[0].age},{age:newValue}]);
    }
    return (
        <div className={"mb-3"}>
            <label className="title_room">{"Habitación "+(idx+1)}</label> {(idx !== 0 ) && <button onClick={removeRoom} className={"btn btn-solid float-right"}>x</button>}
            <div className="qty-box mt-3">
                <label>Adultos</label>
                <div className="input-group">
                    <button type="button" onClick={removeAdult}  className="btn" data-type="minus"
                        data-field=""> - </button>
                    <input type="text" id={"roombox-"+idx} name="quantity" className="form-control qty-input input-number" onChange={() => {}}
                        value={adults} />
                    <button type="button" disabled={disableAddButton} onClick={addAdult} className="btn" data-type="plus"
                        data-field="">+</button>
                </div>
            </div>
            <div className="qty-box">
                <label>Niños</label>
                <div className="input-group">
                    <button type="button" onClick={removeChild} className="btn" data-type="minus"
                        data-field=""> - </button>
                    <input type="text" id={"roombox-"+idx} name="quantity" className="form-control qty-input input-number" onChange={() => {}}
                        value={childs} />
                    <button type="button" disabled={disableAddButton} onClick={addChild} className="btn" data-type="plus"
                        data-field=""> + </button>
                </div>
            </div>
            {childs > 0 && <div className="qty-box">
                <label>Edad Niño 1</label>
                <div className="input-group">
                    <button type="button" onClick={removeAgeFirstChild} className="btn" data-type="minus"
                        data-field=""> - </button>
                    <input type="text" id={"roombox-age-"+idx} name="quantity" className="form-control qty-input input-number" onChange={() => {}}
                        value={ageChilds[0].age} />
                    <button type="button" disabled={disableAddButton} onClick={addAgeFirstChild} className="btn" data-type="plus"
                        data-field=""> + </button>
                </div>
            </div>}
            {childs > 1 && <div className="qty-box">
                <label>Edad Niño 2</label>
                <div className="input-group">
                    <button type="button" onClick={removeAgeSecondChild} className="btn" data-type="minus"
                        data-field=""> - </button>
                    <input type="text" id={"roombox-age-"+idx} name="quantity" className="form-control qty-input input-number" onChange={() => {}}
                        value={ageChilds[1].age} />
                    <button type="button" disabled={disableAddButton} onClick={addAgeSecondChild} className="btn" data-type="plus"
                        data-field=""> + </button>
                </div>
            </div>}
            
        </div>
    );
}
export default RoomBox;